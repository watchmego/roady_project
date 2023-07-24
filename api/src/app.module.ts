import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  CrudResolversModule,
  RelationsResolversModule,
} from './_generated/nestjs';
import { PrismaClient } from '@prisma/client';
import {
  ApolloServerPluginLandingPageLocalDefault,
  // ApolloServerPluginCacheControlDisabled,
} from 'apollo-server-core';

const prisma = new PrismaClient();

@Module({
  imports: [
    CrudResolversModule,
    RelationsResolversModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false, // old playground, replaced with plugin
      autoSchemaFile: true,
      // installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
        // ApolloServerPluginCacheControlDisabled(),
      ], // apollo studio

      context: (data: any) => {
        return {
          token: undefined as string | undefined,
          req: data.req as any,
          prisma,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
