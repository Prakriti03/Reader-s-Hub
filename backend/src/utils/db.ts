import camelize from "camelize";
import toSnakeCase from "to-snake-case";
import { baseKnexConfig } from "../knexfile";
import knex, { Knex } from "knex";

const knexConfig: Knex.Config = {
  ...baseKnexConfig,
  wrapIdentifier(value, origImpl) {
    if (value === "*") {
      return origImpl(value);
    }
    return origImpl(toSnakeCase(value));
  },
  postProcessResponse: (result) => {
    return camelize(result);
  },
};

export default knex(baseKnexConfig);