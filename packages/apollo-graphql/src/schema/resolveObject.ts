import { GraphQLResolveInfo, FieldNode } from "@apollo/graphql";

export type GraphQLObjectResolver<TSource, TContext> = (
  source: TSource,
  fields: Record<string, ReadonlyArray<FieldNode>>,
  context: TContext,
  info: GraphQLResolveInfo
) => any;

declare module "@apollo/graphql/type/definition" {
  interface GraphQLObjectType {
    resolveObject?: GraphQLObjectResolver<any, any>;
  }

  interface GraphQLObjectTypeConfig<TSource, TContext> {
    resolveObject?: GraphQLObjectResolver<TSource, TContext>;
  }
}
