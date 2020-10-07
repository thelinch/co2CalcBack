import { EntityRepository, Repository } from "typeorm";
import { Travel } from "../models/Travel.entity";

@EntityRepository(Travel)
export class TravelRepository extends Repository<Travel>{

    
}