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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RecordLabelService } from "../recordLabel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RecordLabelCreateInput } from "./RecordLabelCreateInput";
import { RecordLabel } from "./RecordLabel";
import { RecordLabelFindManyArgs } from "./RecordLabelFindManyArgs";
import { RecordLabelWhereUniqueInput } from "./RecordLabelWhereUniqueInput";
import { RecordLabelUpdateInput } from "./RecordLabelUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RecordLabelControllerBase {
  constructor(
    protected readonly service: RecordLabelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RecordLabel })
  @nestAccessControl.UseRoles({
    resource: "RecordLabel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRecordLabel(
    @common.Body() data: RecordLabelCreateInput
  ): Promise<RecordLabel> {
    return await this.service.createRecordLabel({
      data: {
        ...data,

        virtualArtist: data.virtualArtist
          ? {
              connect: data.virtualArtist,
            }
          : undefined,
      },
      select: {
        analytics: true,
        createdAt: true,
        id: true,
        name: true,
        promotions: true,
        updatedAt: true,

        virtualArtist: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RecordLabel] })
  @ApiNestedQuery(RecordLabelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RecordLabel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recordLabels(@common.Req() request: Request): Promise<RecordLabel[]> {
    const args = plainToClass(RecordLabelFindManyArgs, request.query);
    return this.service.recordLabels({
      ...args,
      select: {
        analytics: true,
        createdAt: true,
        id: true,
        name: true,
        promotions: true,
        updatedAt: true,

        virtualArtist: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RecordLabel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RecordLabel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recordLabel(
    @common.Param() params: RecordLabelWhereUniqueInput
  ): Promise<RecordLabel | null> {
    const result = await this.service.recordLabel({
      where: params,
      select: {
        analytics: true,
        createdAt: true,
        id: true,
        name: true,
        promotions: true,
        updatedAt: true,

        virtualArtist: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RecordLabel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RecordLabel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRecordLabel(
    @common.Param() params: RecordLabelWhereUniqueInput,
    @common.Body() data: RecordLabelUpdateInput
  ): Promise<RecordLabel | null> {
    try {
      return await this.service.updateRecordLabel({
        where: params,
        data: {
          ...data,

          virtualArtist: data.virtualArtist
            ? {
                connect: data.virtualArtist,
              }
            : undefined,
        },
        select: {
          analytics: true,
          createdAt: true,
          id: true,
          name: true,
          promotions: true,
          updatedAt: true,

          virtualArtist: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: RecordLabel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RecordLabel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRecordLabel(
    @common.Param() params: RecordLabelWhereUniqueInput
  ): Promise<RecordLabel | null> {
    try {
      return await this.service.deleteRecordLabel({
        where: params,
        select: {
          analytics: true,
          createdAt: true,
          id: true,
          name: true,
          promotions: true,
          updatedAt: true,

          virtualArtist: {
            select: {
              id: true,
            },
          },
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
