const { matchedData } = require("express-validator");
const { Usuario } = require("../db");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");

const userGet = async (req, res) => {
  try {
    const data = await Usuario.findAll();
    if (!data || data.length === 0) {
      return handleHttpError(res, "USUARIOS_NO_ENCONTRADOS");
    }
    res.status(200).json(data);
  } catch (error) {
    handleHttpError(res, "ERROR_OBTENER_USUARIOS");
  }
};
const userRegister = async (req, res) => {
  try {
    req = matchedData(req);

    // Check if email is already registered
    const user = await Usuario.findOne({ where: { email: req.email } });
    if (user) {
      return res.status(409).json({ error: "EMAIL_ALREADY_REGISTERED" });
    }
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await Usuario.create(body);

    res.status(201).json(dataUser);
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTRO");
  }
};

const userLogin = async (req, res) => {
  try {
    req = matchedData(req);
    console.log(req);
    const user = await Usuario.findOne({
      where: { email: req.email },
      attributes: [
        "id",
        "nombre",
        "apellido",
        "email",
        "password",
        "rol",
        "fechaNacimiento",
      ],
    });
    if (!user) {
      handleHttpError(res, "USER_NO_REGISTRADO", 404);
      return;
    }
    const hashPassword = user.password;
    const check = await compare(req.password, hashPassword);
    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }
    const data = {
      token: await tokenSign(user),
      user,
    };

    const expirationTime = 24 * 60 * 60 * 1000;
    res.cookie("session", data.token, {
      expires: new Date(Date.now() + expirationTime),
      httpOnly: true,
    });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { userRegister, userLogin, userGet };
