// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Utilisateur, CommandeFoodModel, FoodCardModel, TablelivraisonModel, LivreurModel, FastFoodEntrepriseModel } = initSchema(schema);

export {
  Utilisateur,
  CommandeFoodModel,
  FoodCardModel,
  TablelivraisonModel,
  LivreurModel,
  FastFoodEntrepriseModel
};