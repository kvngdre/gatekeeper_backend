import { CreateUserDto, UpdateUserDto } from "../../logic/dto/user/index.js";
import { UserService, userService } from "../../logic/services/index.js";
import BaseHttpResponse from "../lib/base-http-response.js";

export class UserController {
  /** @type {UserService} */
  #userService;

  constructor(userService_) {
    this.#userService = userService_;
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  index = async (req, res) => {
    const { message, data } = await this.#userService.all();
    const response = BaseHttpResponse.success(message, data);

    res.status(200).json(response);
  };

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  create = async (req, res) => {
    const createUserDto = CreateUserDto.from(req.body);

    const { message, data } = await this.#userService.create(createUserDto);
    const response = BaseHttpResponse.success(message, data);

    res.status(201).json(response);
  };

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  show = async (req, res) => {
    const { message, data } = await this.#userService.get(req.params.id);
    const response = BaseHttpResponse.success(message, data);

    res.status(200).json(response);
  };

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  getByAccessCode = async (req, res) => {
    const { message, data } = await this.#userService.getByAccessCode(
      req.params.code,
    );
    const response = BaseHttpResponse.success(message, data);

    res.status(200).json(response);
  };

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  edit = async (req, res) => {
    const updateUserDto = UpdateUserDto.from(req.body);

    const { message, data } = await this.#userService.update(
      req.params.id,
      updateUserDto,
    );
    const response = BaseHttpResponse.success(message, data);

    res.status(200).json(response);
  };

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  destroy = async (req, res) => {
    const { message } = await this.#userService.delete(req.params.id);
    const response = BaseHttpResponse.success(message);

    res.status(204).json(response);
  };

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  checkIn = async (req, res) => {
    const { message, data } = await this.#userService.checkIn(req.params.id);
    const response = BaseHttpResponse.success(message, data);

    res.status(200).json(response);
  };
}

export const userController = new UserController(userService);
