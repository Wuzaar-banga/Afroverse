/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { InvestmentService } from "../investment.service";
import { InvestmentCreateInput } from "./InvestmentCreateInput";
import { InvestmentWhereInput } from "./InvestmentWhereInput";
import { InvestmentWhereUniqueInput } from "./InvestmentWhereUniqueInput";
import { InvestmentFindManyArgs } from "./InvestmentFindManyArgs";
import { InvestmentUpdateInput } from "./InvestmentUpdateInput";
import { Investment } from "./Investment";

export class InvestmentGrpcControllerBase {
  constructor(protected readonly service: InvestmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Investment })
  @GrpcMethod("InvestmentService", "createInvestment")
  async createInvestment(
    @common.Body() data: InvestmentCreateInput
  ): Promise<Investment> {
    return await this.service.createInvestment({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        investor: true,
        reward: true,
        tokenStaked: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Investment] })
  @ApiNestedQuery(InvestmentFindManyArgs)
  @GrpcMethod("InvestmentService", "investments")
  async investments(@common.Req() request: Request): Promise<Investment[]> {
    const args = plainToClass(InvestmentFindManyArgs, request.query);
    return this.service.investments({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        investor: true,
        reward: true,
        tokenStaked: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Investment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("InvestmentService", "investment")
  async investment(
    @common.Param() params: InvestmentWhereUniqueInput
  ): Promise<Investment | null> {
    const result = await this.service.investment({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        investor: true,
        reward: true,
        tokenStaked: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Investment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("InvestmentService", "updateInvestment")
  async updateInvestment(
    @common.Param() params: InvestmentWhereUniqueInput,
    @common.Body() data: InvestmentUpdateInput
  ): Promise<Investment | null> {
    try {
      return await this.service.updateInvestment({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          investor: true,
          reward: true,
          tokenStaked: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Investment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("InvestmentService", "deleteInvestment")
  async deleteInvestment(
    @common.Param() params: InvestmentWhereUniqueInput
  ): Promise<Investment | null> {
    try {
      return await this.service.deleteInvestment({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          investor: true,
          reward: true,
          tokenStaked: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
