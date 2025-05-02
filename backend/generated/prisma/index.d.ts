
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CreditHistory
 * 
 */
export type CreditHistory = $Result.DefaultSelection<Prisma.$CreditHistoryPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model LikedPost
 * 
 */
export type LikedPost = $Result.DefaultSelection<Prisma.$LikedPostPayload>
/**
 * Model SavedPost
 * 
 */
export type SavedPost = $Result.DefaultSelection<Prisma.$SavedPostPayload>
/**
 * Model ReportedPost
 * 
 */
export type ReportedPost = $Result.DefaultSelection<Prisma.$ReportedPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditHistory`: Exposes CRUD operations for the **CreditHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditHistories
    * const creditHistories = await prisma.creditHistory.findMany()
    * ```
    */
  get creditHistory(): Prisma.CreditHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedPost`: Exposes CRUD operations for the **LikedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedPosts
    * const likedPosts = await prisma.likedPost.findMany()
    * ```
    */
  get likedPost(): Prisma.LikedPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedPost`: Exposes CRUD operations for the **SavedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedPosts
    * const savedPosts = await prisma.savedPost.findMany()
    * ```
    */
  get savedPost(): Prisma.SavedPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportedPost`: Exposes CRUD operations for the **ReportedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportedPosts
    * const reportedPosts = await prisma.reportedPost.findMany()
    * ```
    */
  get reportedPost(): Prisma.ReportedPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CreditHistory: 'CreditHistory',
    Admin: 'Admin',
    Post: 'Post',
    LikedPost: 'LikedPost',
    SavedPost: 'SavedPost',
    ReportedPost: 'ReportedPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "creditHistory" | "admin" | "post" | "likedPost" | "savedPost" | "reportedPost"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CreditHistory: {
        payload: Prisma.$CreditHistoryPayload<ExtArgs>
        fields: Prisma.CreditHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>
          }
          findFirst: {
            args: Prisma.CreditHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>
          }
          findMany: {
            args: Prisma.CreditHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>[]
          }
          create: {
            args: Prisma.CreditHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>
          }
          createMany: {
            args: Prisma.CreditHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>
          }
          update: {
            args: Prisma.CreditHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CreditHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditHistoryPayload>
          }
          aggregate: {
            args: Prisma.CreditHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditHistory>
          }
          groupBy: {
            args: Prisma.CreditHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CreditHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CreditHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CreditHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CreditHistoryCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      LikedPost: {
        payload: Prisma.$LikedPostPayload<ExtArgs>
        fields: Prisma.LikedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>
          }
          findFirst: {
            args: Prisma.LikedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>
          }
          findMany: {
            args: Prisma.LikedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>[]
          }
          create: {
            args: Prisma.LikedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>
          }
          createMany: {
            args: Prisma.LikedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>
          }
          update: {
            args: Prisma.LikedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>
          }
          deleteMany: {
            args: Prisma.LikedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPostPayload>
          }
          aggregate: {
            args: Prisma.LikedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedPost>
          }
          groupBy: {
            args: Prisma.LikedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikedPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikedPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LikedPostCountArgs<ExtArgs>
            result: $Utils.Optional<LikedPostCountAggregateOutputType> | number
          }
        }
      }
      SavedPost: {
        payload: Prisma.$SavedPostPayload<ExtArgs>
        fields: Prisma.SavedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findFirst: {
            args: Prisma.SavedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findMany: {
            args: Prisma.SavedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          create: {
            args: Prisma.SavedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          createMany: {
            args: Prisma.SavedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          update: {
            args: Prisma.SavedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          deleteMany: {
            args: Prisma.SavedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          aggregate: {
            args: Prisma.SavedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedPost>
          }
          groupBy: {
            args: Prisma.SavedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SavedPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SavedPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SavedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SavedPostCountAggregateOutputType> | number
          }
        }
      }
      ReportedPost: {
        payload: Prisma.$ReportedPostPayload<ExtArgs>
        fields: Prisma.ReportedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>
          }
          findFirst: {
            args: Prisma.ReportedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>
          }
          findMany: {
            args: Prisma.ReportedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>[]
          }
          create: {
            args: Prisma.ReportedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>
          }
          createMany: {
            args: Prisma.ReportedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>
          }
          update: {
            args: Prisma.ReportedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>
          }
          deleteMany: {
            args: Prisma.ReportedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportedPostPayload>
          }
          aggregate: {
            args: Prisma.ReportedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportedPost>
          }
          groupBy: {
            args: Prisma.ReportedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportedPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReportedPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReportedPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReportedPostCountArgs<ExtArgs>
            result: $Utils.Optional<ReportedPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    creditHistory?: CreditHistoryOmit
    admin?: AdminOmit
    post?: PostOmit
    likedPost?: LikedPostOmit
    savedPost?: SavedPostOmit
    reportedPost?: ReportedPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    creditHistory: number
    savedPosts: number
    likedPosts: number
    reportedPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditHistory?: boolean | UserCountOutputTypeCountCreditHistoryArgs
    savedPosts?: boolean | UserCountOutputTypeCountSavedPostsArgs
    likedPosts?: boolean | UserCountOutputTypeCountLikedPostsArgs
    reportedPosts?: boolean | UserCountOutputTypeCountReportedPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportedPostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    savedBy: number
    likedBy: number
    reportedBy: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | PostCountOutputTypeCountSavedByArgs
    likedBy?: boolean | PostCountOutputTypeCountLikedByArgs
    reportedBy?: boolean | PostCountOutputTypeCountReportedByArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountReportedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportedPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    Credits: number | null
  }

  export type UserSumAggregateOutputType = {
    Credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    mobile: string | null
    firstname: string | null
    lastname: string | null
    bio: string | null
    avatarUrl: string | null
    location: string | null
    website: string | null
    Credits: number | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    mobile: string | null
    firstname: string | null
    lastname: string | null
    bio: string | null
    avatarUrl: string | null
    location: string | null
    website: string | null
    Credits: number | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    mobile: number
    firstname: number
    lastname: number
    bio: number
    avatarUrl: number
    location: number
    website: number
    Credits: number
    lastLogin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    Credits?: true
  }

  export type UserSumAggregateInputType = {
    Credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    mobile?: true
    firstname?: true
    lastname?: true
    bio?: true
    avatarUrl?: true
    location?: true
    website?: true
    Credits?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    mobile?: true
    firstname?: true
    lastname?: true
    bio?: true
    avatarUrl?: true
    location?: true
    website?: true
    Credits?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    mobile?: true
    firstname?: true
    lastname?: true
    bio?: true
    avatarUrl?: true
    location?: true
    website?: true
    Credits?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string | null
    mobile: string | null
    firstname: string | null
    lastname: string | null
    bio: string | null
    avatarUrl: string | null
    location: string | null
    website: string | null
    Credits: number
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    mobile?: boolean
    firstname?: boolean
    lastname?: boolean
    bio?: boolean
    avatarUrl?: boolean
    location?: boolean
    website?: boolean
    Credits?: boolean
    lastLogin?: boolean
    creditHistory?: boolean | User$creditHistoryArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    likedPosts?: boolean | User$likedPostsArgs<ExtArgs>
    reportedPosts?: boolean | User$reportedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    mobile?: boolean
    firstname?: boolean
    lastname?: boolean
    bio?: boolean
    avatarUrl?: boolean
    location?: boolean
    website?: boolean
    Credits?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "mobile" | "firstname" | "lastname" | "bio" | "avatarUrl" | "location" | "website" | "Credits" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditHistory?: boolean | User$creditHistoryArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    likedPosts?: boolean | User$likedPostsArgs<ExtArgs>
    reportedPosts?: boolean | User$reportedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      creditHistory: Prisma.$CreditHistoryPayload<ExtArgs>[]
      savedPosts: Prisma.$SavedPostPayload<ExtArgs>[]
      likedPosts: Prisma.$LikedPostPayload<ExtArgs>[]
      reportedPosts: Prisma.$ReportedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string | null
      mobile: string | null
      firstname: string | null
      lastname: string | null
      bio: string | null
      avatarUrl: string | null
      location: string | null
      website: string | null
      Credits: number
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditHistory<T extends User$creditHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$creditHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedPosts<T extends User$savedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedPosts<T extends User$likedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportedPosts<T extends User$reportedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly Credits: FieldRef<"User", 'Int'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.creditHistory
   */
  export type User$creditHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    where?: CreditHistoryWhereInput
    orderBy?: CreditHistoryOrderByWithRelationInput | CreditHistoryOrderByWithRelationInput[]
    cursor?: CreditHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditHistoryScalarFieldEnum | CreditHistoryScalarFieldEnum[]
  }

  /**
   * User.savedPosts
   */
  export type User$savedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * User.likedPosts
   */
  export type User$likedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    where?: LikedPostWhereInput
    orderBy?: LikedPostOrderByWithRelationInput | LikedPostOrderByWithRelationInput[]
    cursor?: LikedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedPostScalarFieldEnum | LikedPostScalarFieldEnum[]
  }

  /**
   * User.reportedPosts
   */
  export type User$reportedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    where?: ReportedPostWhereInput
    orderBy?: ReportedPostOrderByWithRelationInput | ReportedPostOrderByWithRelationInput[]
    cursor?: ReportedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportedPostScalarFieldEnum | ReportedPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CreditHistory
   */

  export type AggregateCreditHistory = {
    _count: CreditHistoryCountAggregateOutputType | null
    _avg: CreditHistoryAvgAggregateOutputType | null
    _sum: CreditHistorySumAggregateOutputType | null
    _min: CreditHistoryMinAggregateOutputType | null
    _max: CreditHistoryMaxAggregateOutputType | null
  }

  export type CreditHistoryAvgAggregateOutputType = {
    amount: number | null
  }

  export type CreditHistorySumAggregateOutputType = {
    amount: number | null
  }

  export type CreditHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type CreditHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type CreditHistoryCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    amount: number
    createdAt: number
    _all: number
  }


  export type CreditHistoryAvgAggregateInputType = {
    amount?: true
  }

  export type CreditHistorySumAggregateInputType = {
    amount?: true
  }

  export type CreditHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    amount?: true
    createdAt?: true
  }

  export type CreditHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    amount?: true
    createdAt?: true
  }

  export type CreditHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type CreditHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditHistory to aggregate.
     */
    where?: CreditHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditHistories to fetch.
     */
    orderBy?: CreditHistoryOrderByWithRelationInput | CreditHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditHistories
    **/
    _count?: true | CreditHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditHistoryMaxAggregateInputType
  }

  export type GetCreditHistoryAggregateType<T extends CreditHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditHistory[P]>
      : GetScalarType<T[P], AggregateCreditHistory[P]>
  }




  export type CreditHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditHistoryWhereInput
    orderBy?: CreditHistoryOrderByWithAggregationInput | CreditHistoryOrderByWithAggregationInput[]
    by: CreditHistoryScalarFieldEnum[] | CreditHistoryScalarFieldEnum
    having?: CreditHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditHistoryCountAggregateInputType | true
    _avg?: CreditHistoryAvgAggregateInputType
    _sum?: CreditHistorySumAggregateInputType
    _min?: CreditHistoryMinAggregateInputType
    _max?: CreditHistoryMaxAggregateInputType
  }

  export type CreditHistoryGroupByOutputType = {
    id: string
    userId: string
    reason: string
    amount: number
    createdAt: Date
    _count: CreditHistoryCountAggregateOutputType | null
    _avg: CreditHistoryAvgAggregateOutputType | null
    _sum: CreditHistorySumAggregateOutputType | null
    _min: CreditHistoryMinAggregateOutputType | null
    _max: CreditHistoryMaxAggregateOutputType | null
  }

  type GetCreditHistoryGroupByPayload<T extends CreditHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CreditHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CreditHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditHistory"]>



  export type CreditHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type CreditHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reason" | "amount" | "createdAt", ExtArgs["result"]["creditHistory"]>
  export type CreditHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reason: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["creditHistory"]>
    composites: {}
  }

  type CreditHistoryGetPayload<S extends boolean | null | undefined | CreditHistoryDefaultArgs> = $Result.GetResult<Prisma.$CreditHistoryPayload, S>

  type CreditHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditHistoryCountAggregateInputType | true
    }

  export interface CreditHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditHistory'], meta: { name: 'CreditHistory' } }
    /**
     * Find zero or one CreditHistory that matches the filter.
     * @param {CreditHistoryFindUniqueArgs} args - Arguments to find a CreditHistory
     * @example
     * // Get one CreditHistory
     * const creditHistory = await prisma.creditHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditHistoryFindUniqueArgs>(args: SelectSubset<T, CreditHistoryFindUniqueArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditHistoryFindUniqueOrThrowArgs} args - Arguments to find a CreditHistory
     * @example
     * // Get one CreditHistory
     * const creditHistory = await prisma.creditHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryFindFirstArgs} args - Arguments to find a CreditHistory
     * @example
     * // Get one CreditHistory
     * const creditHistory = await prisma.creditHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditHistoryFindFirstArgs>(args?: SelectSubset<T, CreditHistoryFindFirstArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryFindFirstOrThrowArgs} args - Arguments to find a CreditHistory
     * @example
     * // Get one CreditHistory
     * const creditHistory = await prisma.creditHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditHistories
     * const creditHistories = await prisma.creditHistory.findMany()
     * 
     * // Get first 10 CreditHistories
     * const creditHistories = await prisma.creditHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditHistoryWithIdOnly = await prisma.creditHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditHistoryFindManyArgs>(args?: SelectSubset<T, CreditHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditHistory.
     * @param {CreditHistoryCreateArgs} args - Arguments to create a CreditHistory.
     * @example
     * // Create one CreditHistory
     * const CreditHistory = await prisma.creditHistory.create({
     *   data: {
     *     // ... data to create a CreditHistory
     *   }
     * })
     * 
     */
    create<T extends CreditHistoryCreateArgs>(args: SelectSubset<T, CreditHistoryCreateArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditHistories.
     * @param {CreditHistoryCreateManyArgs} args - Arguments to create many CreditHistories.
     * @example
     * // Create many CreditHistories
     * const creditHistory = await prisma.creditHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditHistoryCreateManyArgs>(args?: SelectSubset<T, CreditHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditHistory.
     * @param {CreditHistoryDeleteArgs} args - Arguments to delete one CreditHistory.
     * @example
     * // Delete one CreditHistory
     * const CreditHistory = await prisma.creditHistory.delete({
     *   where: {
     *     // ... filter to delete one CreditHistory
     *   }
     * })
     * 
     */
    delete<T extends CreditHistoryDeleteArgs>(args: SelectSubset<T, CreditHistoryDeleteArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditHistory.
     * @param {CreditHistoryUpdateArgs} args - Arguments to update one CreditHistory.
     * @example
     * // Update one CreditHistory
     * const creditHistory = await prisma.creditHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditHistoryUpdateArgs>(args: SelectSubset<T, CreditHistoryUpdateArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditHistories.
     * @param {CreditHistoryDeleteManyArgs} args - Arguments to filter CreditHistories to delete.
     * @example
     * // Delete a few CreditHistories
     * const { count } = await prisma.creditHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditHistoryDeleteManyArgs>(args?: SelectSubset<T, CreditHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditHistories
     * const creditHistory = await prisma.creditHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditHistoryUpdateManyArgs>(args: SelectSubset<T, CreditHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditHistory.
     * @param {CreditHistoryUpsertArgs} args - Arguments to update or create a CreditHistory.
     * @example
     * // Update or create a CreditHistory
     * const creditHistory = await prisma.creditHistory.upsert({
     *   create: {
     *     // ... data to create a CreditHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditHistory we want to update
     *   }
     * })
     */
    upsert<T extends CreditHistoryUpsertArgs>(args: SelectSubset<T, CreditHistoryUpsertArgs<ExtArgs>>): Prisma__CreditHistoryClient<$Result.GetResult<Prisma.$CreditHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditHistories that matches the filter.
     * @param {CreditHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const creditHistory = await prisma.creditHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CreditHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CreditHistory.
     * @param {CreditHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const creditHistory = await prisma.creditHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CreditHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CreditHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryCountArgs} args - Arguments to filter CreditHistories to count.
     * @example
     * // Count the number of CreditHistories
     * const count = await prisma.creditHistory.count({
     *   where: {
     *     // ... the filter for the CreditHistories we want to count
     *   }
     * })
    **/
    count<T extends CreditHistoryCountArgs>(
      args?: Subset<T, CreditHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditHistoryAggregateArgs>(args: Subset<T, CreditHistoryAggregateArgs>): Prisma.PrismaPromise<GetCreditHistoryAggregateType<T>>

    /**
     * Group by CreditHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CreditHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditHistory model
   */
  readonly fields: CreditHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditHistory model
   */
  interface CreditHistoryFieldRefs {
    readonly id: FieldRef<"CreditHistory", 'String'>
    readonly userId: FieldRef<"CreditHistory", 'String'>
    readonly reason: FieldRef<"CreditHistory", 'String'>
    readonly amount: FieldRef<"CreditHistory", 'Int'>
    readonly createdAt: FieldRef<"CreditHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditHistory findUnique
   */
  export type CreditHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CreditHistory to fetch.
     */
    where: CreditHistoryWhereUniqueInput
  }

  /**
   * CreditHistory findUniqueOrThrow
   */
  export type CreditHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CreditHistory to fetch.
     */
    where: CreditHistoryWhereUniqueInput
  }

  /**
   * CreditHistory findFirst
   */
  export type CreditHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CreditHistory to fetch.
     */
    where?: CreditHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditHistories to fetch.
     */
    orderBy?: CreditHistoryOrderByWithRelationInput | CreditHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditHistories.
     */
    cursor?: CreditHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditHistories.
     */
    distinct?: CreditHistoryScalarFieldEnum | CreditHistoryScalarFieldEnum[]
  }

  /**
   * CreditHistory findFirstOrThrow
   */
  export type CreditHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CreditHistory to fetch.
     */
    where?: CreditHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditHistories to fetch.
     */
    orderBy?: CreditHistoryOrderByWithRelationInput | CreditHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditHistories.
     */
    cursor?: CreditHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditHistories.
     */
    distinct?: CreditHistoryScalarFieldEnum | CreditHistoryScalarFieldEnum[]
  }

  /**
   * CreditHistory findMany
   */
  export type CreditHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CreditHistories to fetch.
     */
    where?: CreditHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditHistories to fetch.
     */
    orderBy?: CreditHistoryOrderByWithRelationInput | CreditHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditHistories.
     */
    cursor?: CreditHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditHistories.
     */
    skip?: number
    distinct?: CreditHistoryScalarFieldEnum | CreditHistoryScalarFieldEnum[]
  }

  /**
   * CreditHistory create
   */
  export type CreditHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditHistory.
     */
    data: XOR<CreditHistoryCreateInput, CreditHistoryUncheckedCreateInput>
  }

  /**
   * CreditHistory createMany
   */
  export type CreditHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditHistories.
     */
    data: CreditHistoryCreateManyInput | CreditHistoryCreateManyInput[]
  }

  /**
   * CreditHistory update
   */
  export type CreditHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditHistory.
     */
    data: XOR<CreditHistoryUpdateInput, CreditHistoryUncheckedUpdateInput>
    /**
     * Choose, which CreditHistory to update.
     */
    where: CreditHistoryWhereUniqueInput
  }

  /**
   * CreditHistory updateMany
   */
  export type CreditHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditHistories.
     */
    data: XOR<CreditHistoryUpdateManyMutationInput, CreditHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CreditHistories to update
     */
    where?: CreditHistoryWhereInput
    /**
     * Limit how many CreditHistories to update.
     */
    limit?: number
  }

  /**
   * CreditHistory upsert
   */
  export type CreditHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditHistory to update in case it exists.
     */
    where: CreditHistoryWhereUniqueInput
    /**
     * In case the CreditHistory found by the `where` argument doesn't exist, create a new CreditHistory with this data.
     */
    create: XOR<CreditHistoryCreateInput, CreditHistoryUncheckedCreateInput>
    /**
     * In case the CreditHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditHistoryUpdateInput, CreditHistoryUncheckedUpdateInput>
  }

  /**
   * CreditHistory delete
   */
  export type CreditHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
    /**
     * Filter which CreditHistory to delete.
     */
    where: CreditHistoryWhereUniqueInput
  }

  /**
   * CreditHistory deleteMany
   */
  export type CreditHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditHistories to delete
     */
    where?: CreditHistoryWhereInput
    /**
     * Limit how many CreditHistories to delete.
     */
    limit?: number
  }

  /**
   * CreditHistory findRaw
   */
  export type CreditHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CreditHistory aggregateRaw
   */
  export type CreditHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CreditHistory without action
   */
  export type CreditHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditHistory
     */
    select?: CreditHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditHistory
     */
    omit?: CreditHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    avatarUrl: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    avatarUrl: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    password: number
    avatarUrl: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    avatarUrl?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    avatarUrl?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    avatarUrl?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    username: string
    firstname: string | null
    lastname: string | null
    password: string
    avatarUrl: string | null
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    avatarUrl?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "firstname" | "lastname" | "password" | "avatarUrl", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      firstname: string | null
      lastname: string | null
      password: string
      avatarUrl: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly firstname: FieldRef<"Admin", 'String'>
    readonly lastname: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly avatarUrl: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    likes: number | null
    reports: number | null
  }

  export type PostSumAggregateOutputType = {
    likes: number | null
    reports: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    likes: number | null
    reports: number | null
    platform: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    likes: number | null
    reports: number | null
    platform: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    likes: number
    comments: number
    reports: number
    platform: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    likes?: true
    reports?: true
  }

  export type PostSumAggregateInputType = {
    likes?: true
    reports?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    likes?: true
    reports?: true
    platform?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    likes?: true
    reports?: true
    platform?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    likes?: true
    comments?: true
    reports?: true
    platform?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    description: string
    likes: number
    comments: string[]
    reports: number
    platform: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    likes?: boolean
    comments?: boolean
    reports?: boolean
    platform?: boolean
    savedBy?: boolean | Post$savedByArgs<ExtArgs>
    likedBy?: boolean | Post$likedByArgs<ExtArgs>
    reportedBy?: boolean | Post$reportedByArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    likes?: boolean
    comments?: boolean
    reports?: boolean
    platform?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "likes" | "comments" | "reports" | "platform", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | Post$savedByArgs<ExtArgs>
    likedBy?: boolean | Post$likedByArgs<ExtArgs>
    reportedBy?: boolean | Post$reportedByArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      savedBy: Prisma.$SavedPostPayload<ExtArgs>[]
      likedBy: Prisma.$LikedPostPayload<ExtArgs>[]
      reportedBy: Prisma.$ReportedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      likes: number
      comments: string[]
      reports: number
      platform: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedBy<T extends Post$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Post$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends Post$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Post$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportedBy<T extends Post$reportedByArgs<ExtArgs> = {}>(args?: Subset<T, Post$reportedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly likes: FieldRef<"Post", 'Int'>
    readonly comments: FieldRef<"Post", 'String[]'>
    readonly reports: FieldRef<"Post", 'Int'>
    readonly platform: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post findRaw
   */
  export type PostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Post.savedBy
   */
  export type Post$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * Post.likedBy
   */
  export type Post$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    where?: LikedPostWhereInput
    orderBy?: LikedPostOrderByWithRelationInput | LikedPostOrderByWithRelationInput[]
    cursor?: LikedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedPostScalarFieldEnum | LikedPostScalarFieldEnum[]
  }

  /**
   * Post.reportedBy
   */
  export type Post$reportedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    where?: ReportedPostWhereInput
    orderBy?: ReportedPostOrderByWithRelationInput | ReportedPostOrderByWithRelationInput[]
    cursor?: ReportedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportedPostScalarFieldEnum | ReportedPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model LikedPost
   */

  export type AggregateLikedPost = {
    _count: LikedPostCountAggregateOutputType | null
    _min: LikedPostMinAggregateOutputType | null
    _max: LikedPostMaxAggregateOutputType | null
  }

  export type LikedPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type LikedPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type LikedPostCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    _all: number
  }


  export type LikedPostMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type LikedPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type LikedPostCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type LikedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedPost to aggregate.
     */
    where?: LikedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPosts to fetch.
     */
    orderBy?: LikedPostOrderByWithRelationInput | LikedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedPosts
    **/
    _count?: true | LikedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedPostMaxAggregateInputType
  }

  export type GetLikedPostAggregateType<T extends LikedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedPost[P]>
      : GetScalarType<T[P], AggregateLikedPost[P]>
  }




  export type LikedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPostWhereInput
    orderBy?: LikedPostOrderByWithAggregationInput | LikedPostOrderByWithAggregationInput[]
    by: LikedPostScalarFieldEnum[] | LikedPostScalarFieldEnum
    having?: LikedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedPostCountAggregateInputType | true
    _min?: LikedPostMinAggregateInputType
    _max?: LikedPostMaxAggregateInputType
  }

  export type LikedPostGroupByOutputType = {
    id: string
    userId: string
    postId: string
    _count: LikedPostCountAggregateOutputType | null
    _min: LikedPostMinAggregateOutputType | null
    _max: LikedPostMaxAggregateOutputType | null
  }

  type GetLikedPostGroupByPayload<T extends LikedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedPostGroupByOutputType[P]>
            : GetScalarType<T[P], LikedPostGroupByOutputType[P]>
        }
      >
    >


  export type LikedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedPost"]>



  export type LikedPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type LikedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId", ExtArgs["result"]["likedPost"]>
  export type LikedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $LikedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
    }, ExtArgs["result"]["likedPost"]>
    composites: {}
  }

  type LikedPostGetPayload<S extends boolean | null | undefined | LikedPostDefaultArgs> = $Result.GetResult<Prisma.$LikedPostPayload, S>

  type LikedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedPostCountAggregateInputType | true
    }

  export interface LikedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedPost'], meta: { name: 'LikedPost' } }
    /**
     * Find zero or one LikedPost that matches the filter.
     * @param {LikedPostFindUniqueArgs} args - Arguments to find a LikedPost
     * @example
     * // Get one LikedPost
     * const likedPost = await prisma.likedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedPostFindUniqueArgs>(args: SelectSubset<T, LikedPostFindUniqueArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedPostFindUniqueOrThrowArgs} args - Arguments to find a LikedPost
     * @example
     * // Get one LikedPost
     * const likedPost = await prisma.likedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostFindFirstArgs} args - Arguments to find a LikedPost
     * @example
     * // Get one LikedPost
     * const likedPost = await prisma.likedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedPostFindFirstArgs>(args?: SelectSubset<T, LikedPostFindFirstArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostFindFirstOrThrowArgs} args - Arguments to find a LikedPost
     * @example
     * // Get one LikedPost
     * const likedPost = await prisma.likedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedPosts
     * const likedPosts = await prisma.likedPost.findMany()
     * 
     * // Get first 10 LikedPosts
     * const likedPosts = await prisma.likedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedPostWithIdOnly = await prisma.likedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedPostFindManyArgs>(args?: SelectSubset<T, LikedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedPost.
     * @param {LikedPostCreateArgs} args - Arguments to create a LikedPost.
     * @example
     * // Create one LikedPost
     * const LikedPost = await prisma.likedPost.create({
     *   data: {
     *     // ... data to create a LikedPost
     *   }
     * })
     * 
     */
    create<T extends LikedPostCreateArgs>(args: SelectSubset<T, LikedPostCreateArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedPosts.
     * @param {LikedPostCreateManyArgs} args - Arguments to create many LikedPosts.
     * @example
     * // Create many LikedPosts
     * const likedPost = await prisma.likedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedPostCreateManyArgs>(args?: SelectSubset<T, LikedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedPost.
     * @param {LikedPostDeleteArgs} args - Arguments to delete one LikedPost.
     * @example
     * // Delete one LikedPost
     * const LikedPost = await prisma.likedPost.delete({
     *   where: {
     *     // ... filter to delete one LikedPost
     *   }
     * })
     * 
     */
    delete<T extends LikedPostDeleteArgs>(args: SelectSubset<T, LikedPostDeleteArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedPost.
     * @param {LikedPostUpdateArgs} args - Arguments to update one LikedPost.
     * @example
     * // Update one LikedPost
     * const likedPost = await prisma.likedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedPostUpdateArgs>(args: SelectSubset<T, LikedPostUpdateArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedPosts.
     * @param {LikedPostDeleteManyArgs} args - Arguments to filter LikedPosts to delete.
     * @example
     * // Delete a few LikedPosts
     * const { count } = await prisma.likedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedPostDeleteManyArgs>(args?: SelectSubset<T, LikedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedPosts
     * const likedPost = await prisma.likedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedPostUpdateManyArgs>(args: SelectSubset<T, LikedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedPost.
     * @param {LikedPostUpsertArgs} args - Arguments to update or create a LikedPost.
     * @example
     * // Update or create a LikedPost
     * const likedPost = await prisma.likedPost.upsert({
     *   create: {
     *     // ... data to create a LikedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedPost we want to update
     *   }
     * })
     */
    upsert<T extends LikedPostUpsertArgs>(args: SelectSubset<T, LikedPostUpsertArgs<ExtArgs>>): Prisma__LikedPostClient<$Result.GetResult<Prisma.$LikedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedPosts that matches the filter.
     * @param {LikedPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likedPost = await prisma.likedPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LikedPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LikedPost.
     * @param {LikedPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likedPost = await prisma.likedPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LikedPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LikedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostCountArgs} args - Arguments to filter LikedPosts to count.
     * @example
     * // Count the number of LikedPosts
     * const count = await prisma.likedPost.count({
     *   where: {
     *     // ... the filter for the LikedPosts we want to count
     *   }
     * })
    **/
    count<T extends LikedPostCountArgs>(
      args?: Subset<T, LikedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedPostAggregateArgs>(args: Subset<T, LikedPostAggregateArgs>): Prisma.PrismaPromise<GetLikedPostAggregateType<T>>

    /**
     * Group by LikedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedPostGroupByArgs['orderBy'] }
        : { orderBy?: LikedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedPost model
   */
  readonly fields: LikedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedPost model
   */
  interface LikedPostFieldRefs {
    readonly id: FieldRef<"LikedPost", 'String'>
    readonly userId: FieldRef<"LikedPost", 'String'>
    readonly postId: FieldRef<"LikedPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LikedPost findUnique
   */
  export type LikedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * Filter, which LikedPost to fetch.
     */
    where: LikedPostWhereUniqueInput
  }

  /**
   * LikedPost findUniqueOrThrow
   */
  export type LikedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * Filter, which LikedPost to fetch.
     */
    where: LikedPostWhereUniqueInput
  }

  /**
   * LikedPost findFirst
   */
  export type LikedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * Filter, which LikedPost to fetch.
     */
    where?: LikedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPosts to fetch.
     */
    orderBy?: LikedPostOrderByWithRelationInput | LikedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedPosts.
     */
    cursor?: LikedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedPosts.
     */
    distinct?: LikedPostScalarFieldEnum | LikedPostScalarFieldEnum[]
  }

  /**
   * LikedPost findFirstOrThrow
   */
  export type LikedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * Filter, which LikedPost to fetch.
     */
    where?: LikedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPosts to fetch.
     */
    orderBy?: LikedPostOrderByWithRelationInput | LikedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedPosts.
     */
    cursor?: LikedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedPosts.
     */
    distinct?: LikedPostScalarFieldEnum | LikedPostScalarFieldEnum[]
  }

  /**
   * LikedPost findMany
   */
  export type LikedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * Filter, which LikedPosts to fetch.
     */
    where?: LikedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPosts to fetch.
     */
    orderBy?: LikedPostOrderByWithRelationInput | LikedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedPosts.
     */
    cursor?: LikedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPosts.
     */
    skip?: number
    distinct?: LikedPostScalarFieldEnum | LikedPostScalarFieldEnum[]
  }

  /**
   * LikedPost create
   */
  export type LikedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedPost.
     */
    data: XOR<LikedPostCreateInput, LikedPostUncheckedCreateInput>
  }

  /**
   * LikedPost createMany
   */
  export type LikedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedPosts.
     */
    data: LikedPostCreateManyInput | LikedPostCreateManyInput[]
  }

  /**
   * LikedPost update
   */
  export type LikedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedPost.
     */
    data: XOR<LikedPostUpdateInput, LikedPostUncheckedUpdateInput>
    /**
     * Choose, which LikedPost to update.
     */
    where: LikedPostWhereUniqueInput
  }

  /**
   * LikedPost updateMany
   */
  export type LikedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedPosts.
     */
    data: XOR<LikedPostUpdateManyMutationInput, LikedPostUncheckedUpdateManyInput>
    /**
     * Filter which LikedPosts to update
     */
    where?: LikedPostWhereInput
    /**
     * Limit how many LikedPosts to update.
     */
    limit?: number
  }

  /**
   * LikedPost upsert
   */
  export type LikedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedPost to update in case it exists.
     */
    where: LikedPostWhereUniqueInput
    /**
     * In case the LikedPost found by the `where` argument doesn't exist, create a new LikedPost with this data.
     */
    create: XOR<LikedPostCreateInput, LikedPostUncheckedCreateInput>
    /**
     * In case the LikedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedPostUpdateInput, LikedPostUncheckedUpdateInput>
  }

  /**
   * LikedPost delete
   */
  export type LikedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
    /**
     * Filter which LikedPost to delete.
     */
    where: LikedPostWhereUniqueInput
  }

  /**
   * LikedPost deleteMany
   */
  export type LikedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedPosts to delete
     */
    where?: LikedPostWhereInput
    /**
     * Limit how many LikedPosts to delete.
     */
    limit?: number
  }

  /**
   * LikedPost findRaw
   */
  export type LikedPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LikedPost aggregateRaw
   */
  export type LikedPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LikedPost without action
   */
  export type LikedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPost
     */
    select?: LikedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPost
     */
    omit?: LikedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPostInclude<ExtArgs> | null
  }


  /**
   * Model SavedPost
   */

  export type AggregateSavedPost = {
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  export type SavedPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type SavedPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type SavedPostCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    _all: number
  }


  export type SavedPostMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type SavedPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type SavedPostCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type SavedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPost to aggregate.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedPosts
    **/
    _count?: true | SavedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedPostMaxAggregateInputType
  }

  export type GetSavedPostAggregateType<T extends SavedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedPost[P]>
      : GetScalarType<T[P], AggregateSavedPost[P]>
  }




  export type SavedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithAggregationInput | SavedPostOrderByWithAggregationInput[]
    by: SavedPostScalarFieldEnum[] | SavedPostScalarFieldEnum
    having?: SavedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedPostCountAggregateInputType | true
    _min?: SavedPostMinAggregateInputType
    _max?: SavedPostMaxAggregateInputType
  }

  export type SavedPostGroupByOutputType = {
    id: string
    userId: string
    postId: string
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  type GetSavedPostGroupByPayload<T extends SavedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
        }
      >
    >


  export type SavedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>



  export type SavedPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type SavedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId", ExtArgs["result"]["savedPost"]>
  export type SavedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $SavedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
    }, ExtArgs["result"]["savedPost"]>
    composites: {}
  }

  type SavedPostGetPayload<S extends boolean | null | undefined | SavedPostDefaultArgs> = $Result.GetResult<Prisma.$SavedPostPayload, S>

  type SavedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedPostCountAggregateInputType | true
    }

  export interface SavedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedPost'], meta: { name: 'SavedPost' } }
    /**
     * Find zero or one SavedPost that matches the filter.
     * @param {SavedPostFindUniqueArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedPostFindUniqueArgs>(args: SelectSubset<T, SavedPostFindUniqueArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedPostFindUniqueOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedPostFindFirstArgs>(args?: SelectSubset<T, SavedPostFindFirstArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedPosts
     * const savedPosts = await prisma.savedPost.findMany()
     * 
     * // Get first 10 SavedPosts
     * const savedPosts = await prisma.savedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedPostFindManyArgs>(args?: SelectSubset<T, SavedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedPost.
     * @param {SavedPostCreateArgs} args - Arguments to create a SavedPost.
     * @example
     * // Create one SavedPost
     * const SavedPost = await prisma.savedPost.create({
     *   data: {
     *     // ... data to create a SavedPost
     *   }
     * })
     * 
     */
    create<T extends SavedPostCreateArgs>(args: SelectSubset<T, SavedPostCreateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedPosts.
     * @param {SavedPostCreateManyArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedPostCreateManyArgs>(args?: SelectSubset<T, SavedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedPost.
     * @param {SavedPostDeleteArgs} args - Arguments to delete one SavedPost.
     * @example
     * // Delete one SavedPost
     * const SavedPost = await prisma.savedPost.delete({
     *   where: {
     *     // ... filter to delete one SavedPost
     *   }
     * })
     * 
     */
    delete<T extends SavedPostDeleteArgs>(args: SelectSubset<T, SavedPostDeleteArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedPost.
     * @param {SavedPostUpdateArgs} args - Arguments to update one SavedPost.
     * @example
     * // Update one SavedPost
     * const savedPost = await prisma.savedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedPostUpdateArgs>(args: SelectSubset<T, SavedPostUpdateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedPosts.
     * @param {SavedPostDeleteManyArgs} args - Arguments to filter SavedPosts to delete.
     * @example
     * // Delete a few SavedPosts
     * const { count } = await prisma.savedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedPostDeleteManyArgs>(args?: SelectSubset<T, SavedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedPostUpdateManyArgs>(args: SelectSubset<T, SavedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedPost.
     * @param {SavedPostUpsertArgs} args - Arguments to update or create a SavedPost.
     * @example
     * // Update or create a SavedPost
     * const savedPost = await prisma.savedPost.upsert({
     *   create: {
     *     // ... data to create a SavedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedPost we want to update
     *   }
     * })
     */
    upsert<T extends SavedPostUpsertArgs>(args: SelectSubset<T, SavedPostUpsertArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * @param {SavedPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const savedPost = await prisma.savedPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SavedPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SavedPost.
     * @param {SavedPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const savedPost = await prisma.savedPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SavedPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostCountArgs} args - Arguments to filter SavedPosts to count.
     * @example
     * // Count the number of SavedPosts
     * const count = await prisma.savedPost.count({
     *   where: {
     *     // ... the filter for the SavedPosts we want to count
     *   }
     * })
    **/
    count<T extends SavedPostCountArgs>(
      args?: Subset<T, SavedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedPostAggregateArgs>(args: Subset<T, SavedPostAggregateArgs>): Prisma.PrismaPromise<GetSavedPostAggregateType<T>>

    /**
     * Group by SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedPostGroupByArgs['orderBy'] }
        : { orderBy?: SavedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedPost model
   */
  readonly fields: SavedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedPost model
   */
  interface SavedPostFieldRefs {
    readonly id: FieldRef<"SavedPost", 'String'>
    readonly userId: FieldRef<"SavedPost", 'String'>
    readonly postId: FieldRef<"SavedPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedPost findUnique
   */
  export type SavedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findUniqueOrThrow
   */
  export type SavedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findFirst
   */
  export type SavedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findFirstOrThrow
   */
  export type SavedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findMany
   */
  export type SavedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPosts to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost create
   */
  export type SavedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedPost.
     */
    data: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
  }

  /**
   * SavedPost createMany
   */
  export type SavedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
  }

  /**
   * SavedPost update
   */
  export type SavedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedPost.
     */
    data: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
    /**
     * Choose, which SavedPost to update.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost updateMany
   */
  export type SavedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
  }

  /**
   * SavedPost upsert
   */
  export type SavedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedPost to update in case it exists.
     */
    where: SavedPostWhereUniqueInput
    /**
     * In case the SavedPost found by the `where` argument doesn't exist, create a new SavedPost with this data.
     */
    create: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
    /**
     * In case the SavedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
  }

  /**
   * SavedPost delete
   */
  export type SavedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter which SavedPost to delete.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost deleteMany
   */
  export type SavedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPosts to delete
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to delete.
     */
    limit?: number
  }

  /**
   * SavedPost findRaw
   */
  export type SavedPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedPost aggregateRaw
   */
  export type SavedPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedPost without action
   */
  export type SavedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
  }


  /**
   * Model ReportedPost
   */

  export type AggregateReportedPost = {
    _count: ReportedPostCountAggregateOutputType | null
    _min: ReportedPostMinAggregateOutputType | null
    _max: ReportedPostMaxAggregateOutputType | null
  }

  export type ReportedPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type ReportedPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type ReportedPostCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    _all: number
  }


  export type ReportedPostMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type ReportedPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type ReportedPostCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type ReportedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportedPost to aggregate.
     */
    where?: ReportedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportedPosts to fetch.
     */
    orderBy?: ReportedPostOrderByWithRelationInput | ReportedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportedPosts
    **/
    _count?: true | ReportedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportedPostMaxAggregateInputType
  }

  export type GetReportedPostAggregateType<T extends ReportedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateReportedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportedPost[P]>
      : GetScalarType<T[P], AggregateReportedPost[P]>
  }




  export type ReportedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportedPostWhereInput
    orderBy?: ReportedPostOrderByWithAggregationInput | ReportedPostOrderByWithAggregationInput[]
    by: ReportedPostScalarFieldEnum[] | ReportedPostScalarFieldEnum
    having?: ReportedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportedPostCountAggregateInputType | true
    _min?: ReportedPostMinAggregateInputType
    _max?: ReportedPostMaxAggregateInputType
  }

  export type ReportedPostGroupByOutputType = {
    id: string
    userId: string
    postId: string
    _count: ReportedPostCountAggregateOutputType | null
    _min: ReportedPostMinAggregateOutputType | null
    _max: ReportedPostMaxAggregateOutputType | null
  }

  type GetReportedPostGroupByPayload<T extends ReportedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportedPostGroupByOutputType[P]>
            : GetScalarType<T[P], ReportedPostGroupByOutputType[P]>
        }
      >
    >


  export type ReportedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportedPost"]>



  export type ReportedPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type ReportedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId", ExtArgs["result"]["reportedPost"]>
  export type ReportedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ReportedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
    }, ExtArgs["result"]["reportedPost"]>
    composites: {}
  }

  type ReportedPostGetPayload<S extends boolean | null | undefined | ReportedPostDefaultArgs> = $Result.GetResult<Prisma.$ReportedPostPayload, S>

  type ReportedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportedPostCountAggregateInputType | true
    }

  export interface ReportedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportedPost'], meta: { name: 'ReportedPost' } }
    /**
     * Find zero or one ReportedPost that matches the filter.
     * @param {ReportedPostFindUniqueArgs} args - Arguments to find a ReportedPost
     * @example
     * // Get one ReportedPost
     * const reportedPost = await prisma.reportedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportedPostFindUniqueArgs>(args: SelectSubset<T, ReportedPostFindUniqueArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportedPostFindUniqueOrThrowArgs} args - Arguments to find a ReportedPost
     * @example
     * // Get one ReportedPost
     * const reportedPost = await prisma.reportedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostFindFirstArgs} args - Arguments to find a ReportedPost
     * @example
     * // Get one ReportedPost
     * const reportedPost = await prisma.reportedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportedPostFindFirstArgs>(args?: SelectSubset<T, ReportedPostFindFirstArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostFindFirstOrThrowArgs} args - Arguments to find a ReportedPost
     * @example
     * // Get one ReportedPost
     * const reportedPost = await prisma.reportedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportedPosts
     * const reportedPosts = await prisma.reportedPost.findMany()
     * 
     * // Get first 10 ReportedPosts
     * const reportedPosts = await prisma.reportedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportedPostWithIdOnly = await prisma.reportedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportedPostFindManyArgs>(args?: SelectSubset<T, ReportedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportedPost.
     * @param {ReportedPostCreateArgs} args - Arguments to create a ReportedPost.
     * @example
     * // Create one ReportedPost
     * const ReportedPost = await prisma.reportedPost.create({
     *   data: {
     *     // ... data to create a ReportedPost
     *   }
     * })
     * 
     */
    create<T extends ReportedPostCreateArgs>(args: SelectSubset<T, ReportedPostCreateArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportedPosts.
     * @param {ReportedPostCreateManyArgs} args - Arguments to create many ReportedPosts.
     * @example
     * // Create many ReportedPosts
     * const reportedPost = await prisma.reportedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportedPostCreateManyArgs>(args?: SelectSubset<T, ReportedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReportedPost.
     * @param {ReportedPostDeleteArgs} args - Arguments to delete one ReportedPost.
     * @example
     * // Delete one ReportedPost
     * const ReportedPost = await prisma.reportedPost.delete({
     *   where: {
     *     // ... filter to delete one ReportedPost
     *   }
     * })
     * 
     */
    delete<T extends ReportedPostDeleteArgs>(args: SelectSubset<T, ReportedPostDeleteArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportedPost.
     * @param {ReportedPostUpdateArgs} args - Arguments to update one ReportedPost.
     * @example
     * // Update one ReportedPost
     * const reportedPost = await prisma.reportedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportedPostUpdateArgs>(args: SelectSubset<T, ReportedPostUpdateArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportedPosts.
     * @param {ReportedPostDeleteManyArgs} args - Arguments to filter ReportedPosts to delete.
     * @example
     * // Delete a few ReportedPosts
     * const { count } = await prisma.reportedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportedPostDeleteManyArgs>(args?: SelectSubset<T, ReportedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportedPosts
     * const reportedPost = await prisma.reportedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportedPostUpdateManyArgs>(args: SelectSubset<T, ReportedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReportedPost.
     * @param {ReportedPostUpsertArgs} args - Arguments to update or create a ReportedPost.
     * @example
     * // Update or create a ReportedPost
     * const reportedPost = await prisma.reportedPost.upsert({
     *   create: {
     *     // ... data to create a ReportedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportedPost we want to update
     *   }
     * })
     */
    upsert<T extends ReportedPostUpsertArgs>(args: SelectSubset<T, ReportedPostUpsertArgs<ExtArgs>>): Prisma__ReportedPostClient<$Result.GetResult<Prisma.$ReportedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportedPosts that matches the filter.
     * @param {ReportedPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reportedPost = await prisma.reportedPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReportedPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ReportedPost.
     * @param {ReportedPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reportedPost = await prisma.reportedPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReportedPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ReportedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostCountArgs} args - Arguments to filter ReportedPosts to count.
     * @example
     * // Count the number of ReportedPosts
     * const count = await prisma.reportedPost.count({
     *   where: {
     *     // ... the filter for the ReportedPosts we want to count
     *   }
     * })
    **/
    count<T extends ReportedPostCountArgs>(
      args?: Subset<T, ReportedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportedPostAggregateArgs>(args: Subset<T, ReportedPostAggregateArgs>): Prisma.PrismaPromise<GetReportedPostAggregateType<T>>

    /**
     * Group by ReportedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportedPostGroupByArgs['orderBy'] }
        : { orderBy?: ReportedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportedPost model
   */
  readonly fields: ReportedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReportedPost model
   */
  interface ReportedPostFieldRefs {
    readonly id: FieldRef<"ReportedPost", 'String'>
    readonly userId: FieldRef<"ReportedPost", 'String'>
    readonly postId: FieldRef<"ReportedPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReportedPost findUnique
   */
  export type ReportedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * Filter, which ReportedPost to fetch.
     */
    where: ReportedPostWhereUniqueInput
  }

  /**
   * ReportedPost findUniqueOrThrow
   */
  export type ReportedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * Filter, which ReportedPost to fetch.
     */
    where: ReportedPostWhereUniqueInput
  }

  /**
   * ReportedPost findFirst
   */
  export type ReportedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * Filter, which ReportedPost to fetch.
     */
    where?: ReportedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportedPosts to fetch.
     */
    orderBy?: ReportedPostOrderByWithRelationInput | ReportedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportedPosts.
     */
    cursor?: ReportedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportedPosts.
     */
    distinct?: ReportedPostScalarFieldEnum | ReportedPostScalarFieldEnum[]
  }

  /**
   * ReportedPost findFirstOrThrow
   */
  export type ReportedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * Filter, which ReportedPost to fetch.
     */
    where?: ReportedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportedPosts to fetch.
     */
    orderBy?: ReportedPostOrderByWithRelationInput | ReportedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportedPosts.
     */
    cursor?: ReportedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportedPosts.
     */
    distinct?: ReportedPostScalarFieldEnum | ReportedPostScalarFieldEnum[]
  }

  /**
   * ReportedPost findMany
   */
  export type ReportedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * Filter, which ReportedPosts to fetch.
     */
    where?: ReportedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportedPosts to fetch.
     */
    orderBy?: ReportedPostOrderByWithRelationInput | ReportedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportedPosts.
     */
    cursor?: ReportedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportedPosts.
     */
    skip?: number
    distinct?: ReportedPostScalarFieldEnum | ReportedPostScalarFieldEnum[]
  }

  /**
   * ReportedPost create
   */
  export type ReportedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportedPost.
     */
    data: XOR<ReportedPostCreateInput, ReportedPostUncheckedCreateInput>
  }

  /**
   * ReportedPost createMany
   */
  export type ReportedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportedPosts.
     */
    data: ReportedPostCreateManyInput | ReportedPostCreateManyInput[]
  }

  /**
   * ReportedPost update
   */
  export type ReportedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportedPost.
     */
    data: XOR<ReportedPostUpdateInput, ReportedPostUncheckedUpdateInput>
    /**
     * Choose, which ReportedPost to update.
     */
    where: ReportedPostWhereUniqueInput
  }

  /**
   * ReportedPost updateMany
   */
  export type ReportedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportedPosts.
     */
    data: XOR<ReportedPostUpdateManyMutationInput, ReportedPostUncheckedUpdateManyInput>
    /**
     * Filter which ReportedPosts to update
     */
    where?: ReportedPostWhereInput
    /**
     * Limit how many ReportedPosts to update.
     */
    limit?: number
  }

  /**
   * ReportedPost upsert
   */
  export type ReportedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportedPost to update in case it exists.
     */
    where: ReportedPostWhereUniqueInput
    /**
     * In case the ReportedPost found by the `where` argument doesn't exist, create a new ReportedPost with this data.
     */
    create: XOR<ReportedPostCreateInput, ReportedPostUncheckedCreateInput>
    /**
     * In case the ReportedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportedPostUpdateInput, ReportedPostUncheckedUpdateInput>
  }

  /**
   * ReportedPost delete
   */
  export type ReportedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
    /**
     * Filter which ReportedPost to delete.
     */
    where: ReportedPostWhereUniqueInput
  }

  /**
   * ReportedPost deleteMany
   */
  export type ReportedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportedPosts to delete
     */
    where?: ReportedPostWhereInput
    /**
     * Limit how many ReportedPosts to delete.
     */
    limit?: number
  }

  /**
   * ReportedPost findRaw
   */
  export type ReportedPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ReportedPost aggregateRaw
   */
  export type ReportedPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ReportedPost without action
   */
  export type ReportedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportedPost
     */
    select?: ReportedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportedPost
     */
    omit?: ReportedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportedPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    mobile: 'mobile',
    firstname: 'firstname',
    lastname: 'lastname',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    location: 'location',
    website: 'website',
    Credits: 'Credits',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CreditHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type CreditHistoryScalarFieldEnum = (typeof CreditHistoryScalarFieldEnum)[keyof typeof CreditHistoryScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    avatarUrl: 'avatarUrl'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    likes: 'likes',
    comments: 'comments',
    reports: 'reports',
    platform: 'platform'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LikedPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type LikedPostScalarFieldEnum = (typeof LikedPostScalarFieldEnum)[keyof typeof LikedPostScalarFieldEnum]


  export const SavedPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type SavedPostScalarFieldEnum = (typeof SavedPostScalarFieldEnum)[keyof typeof SavedPostScalarFieldEnum]


  export const ReportedPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type ReportedPostScalarFieldEnum = (typeof ReportedPostScalarFieldEnum)[keyof typeof ReportedPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    Credits?: IntFilter<"User"> | number
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    creditHistory?: CreditHistoryListRelationFilter
    savedPosts?: SavedPostListRelationFilter
    likedPosts?: LikedPostListRelationFilter
    reportedPosts?: ReportedPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    website?: SortOrder
    Credits?: SortOrder
    lastLogin?: SortOrder
    creditHistory?: CreditHistoryOrderByRelationAggregateInput
    savedPosts?: SavedPostOrderByRelationAggregateInput
    likedPosts?: LikedPostOrderByRelationAggregateInput
    reportedPosts?: ReportedPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    Credits?: IntFilter<"User"> | number
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    creditHistory?: CreditHistoryListRelationFilter
    savedPosts?: SavedPostListRelationFilter
    likedPosts?: LikedPostListRelationFilter
    reportedPosts?: ReportedPostListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    website?: SortOrder
    Credits?: SortOrder
    lastLogin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    Credits?: IntWithAggregatesFilter<"User"> | number
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CreditHistoryWhereInput = {
    AND?: CreditHistoryWhereInput | CreditHistoryWhereInput[]
    OR?: CreditHistoryWhereInput[]
    NOT?: CreditHistoryWhereInput | CreditHistoryWhereInput[]
    id?: StringFilter<"CreditHistory"> | string
    userId?: StringFilter<"CreditHistory"> | string
    reason?: StringFilter<"CreditHistory"> | string
    amount?: IntFilter<"CreditHistory"> | number
    createdAt?: DateTimeFilter<"CreditHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditHistoryWhereInput | CreditHistoryWhereInput[]
    OR?: CreditHistoryWhereInput[]
    NOT?: CreditHistoryWhereInput | CreditHistoryWhereInput[]
    userId?: StringFilter<"CreditHistory"> | string
    reason?: StringFilter<"CreditHistory"> | string
    amount?: IntFilter<"CreditHistory"> | number
    createdAt?: DateTimeFilter<"CreditHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CreditHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: CreditHistoryCountOrderByAggregateInput
    _avg?: CreditHistoryAvgOrderByAggregateInput
    _max?: CreditHistoryMaxOrderByAggregateInput
    _min?: CreditHistoryMinOrderByAggregateInput
    _sum?: CreditHistorySumOrderByAggregateInput
  }

  export type CreditHistoryScalarWhereWithAggregatesInput = {
    AND?: CreditHistoryScalarWhereWithAggregatesInput | CreditHistoryScalarWhereWithAggregatesInput[]
    OR?: CreditHistoryScalarWhereWithAggregatesInput[]
    NOT?: CreditHistoryScalarWhereWithAggregatesInput | CreditHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditHistory"> | string
    userId?: StringWithAggregatesFilter<"CreditHistory"> | string
    reason?: StringWithAggregatesFilter<"CreditHistory"> | string
    amount?: IntWithAggregatesFilter<"CreditHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CreditHistory"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    firstname?: StringNullableFilter<"Admin"> | string | null
    lastname?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    avatarUrl?: StringNullableFilter<"Admin"> | string | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    firstname?: StringNullableFilter<"Admin"> | string | null
    lastname?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    avatarUrl?: StringNullableFilter<"Admin"> | string | null
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    firstname?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringWithAggregatesFilter<"Admin"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Admin"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    comments?: StringNullableListFilter<"Post">
    reports?: IntFilter<"Post"> | number
    platform?: StringFilter<"Post"> | string
    savedBy?: SavedPostListRelationFilter
    likedBy?: LikedPostListRelationFilter
    reportedBy?: ReportedPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    reports?: SortOrder
    platform?: SortOrder
    savedBy?: SavedPostOrderByRelationAggregateInput
    likedBy?: LikedPostOrderByRelationAggregateInput
    reportedBy?: ReportedPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    comments?: StringNullableListFilter<"Post">
    reports?: IntFilter<"Post"> | number
    platform?: StringFilter<"Post"> | string
    savedBy?: SavedPostListRelationFilter
    likedBy?: LikedPostListRelationFilter
    reportedBy?: ReportedPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    reports?: SortOrder
    platform?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    description?: StringWithAggregatesFilter<"Post"> | string
    likes?: IntWithAggregatesFilter<"Post"> | number
    comments?: StringNullableListFilter<"Post">
    reports?: IntWithAggregatesFilter<"Post"> | number
    platform?: StringWithAggregatesFilter<"Post"> | string
  }

  export type LikedPostWhereInput = {
    AND?: LikedPostWhereInput | LikedPostWhereInput[]
    OR?: LikedPostWhereInput[]
    NOT?: LikedPostWhereInput | LikedPostWhereInput[]
    id?: StringFilter<"LikedPost"> | string
    userId?: StringFilter<"LikedPost"> | string
    postId?: StringFilter<"LikedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type LikedPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type LikedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedPostWhereInput | LikedPostWhereInput[]
    OR?: LikedPostWhereInput[]
    NOT?: LikedPostWhereInput | LikedPostWhereInput[]
    userId?: StringFilter<"LikedPost"> | string
    postId?: StringFilter<"LikedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type LikedPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: LikedPostCountOrderByAggregateInput
    _max?: LikedPostMaxOrderByAggregateInput
    _min?: LikedPostMinOrderByAggregateInput
  }

  export type LikedPostScalarWhereWithAggregatesInput = {
    AND?: LikedPostScalarWhereWithAggregatesInput | LikedPostScalarWhereWithAggregatesInput[]
    OR?: LikedPostScalarWhereWithAggregatesInput[]
    NOT?: LikedPostScalarWhereWithAggregatesInput | LikedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedPost"> | string
    userId?: StringWithAggregatesFilter<"LikedPost"> | string
    postId?: StringWithAggregatesFilter<"LikedPost"> | string
  }

  export type SavedPostWhereInput = {
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type SavedPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type SavedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type SavedPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: SavedPostCountOrderByAggregateInput
    _max?: SavedPostMaxOrderByAggregateInput
    _min?: SavedPostMinOrderByAggregateInput
  }

  export type SavedPostScalarWhereWithAggregatesInput = {
    AND?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    OR?: SavedPostScalarWhereWithAggregatesInput[]
    NOT?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedPost"> | string
    userId?: StringWithAggregatesFilter<"SavedPost"> | string
    postId?: StringWithAggregatesFilter<"SavedPost"> | string
  }

  export type ReportedPostWhereInput = {
    AND?: ReportedPostWhereInput | ReportedPostWhereInput[]
    OR?: ReportedPostWhereInput[]
    NOT?: ReportedPostWhereInput | ReportedPostWhereInput[]
    id?: StringFilter<"ReportedPost"> | string
    userId?: StringFilter<"ReportedPost"> | string
    postId?: StringFilter<"ReportedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ReportedPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ReportedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportedPostWhereInput | ReportedPostWhereInput[]
    OR?: ReportedPostWhereInput[]
    NOT?: ReportedPostWhereInput | ReportedPostWhereInput[]
    userId?: StringFilter<"ReportedPost"> | string
    postId?: StringFilter<"ReportedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type ReportedPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: ReportedPostCountOrderByAggregateInput
    _max?: ReportedPostMaxOrderByAggregateInput
    _min?: ReportedPostMinOrderByAggregateInput
  }

  export type ReportedPostScalarWhereWithAggregatesInput = {
    AND?: ReportedPostScalarWhereWithAggregatesInput | ReportedPostScalarWhereWithAggregatesInput[]
    OR?: ReportedPostScalarWhereWithAggregatesInput[]
    NOT?: ReportedPostScalarWhereWithAggregatesInput | ReportedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportedPost"> | string
    userId?: StringWithAggregatesFilter<"ReportedPost"> | string
    postId?: StringWithAggregatesFilter<"ReportedPost"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryUncheckedCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostUncheckedCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUncheckedUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUncheckedUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreditHistoryCreateInput = {
    id?: string
    reason: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCreditHistoryInput
  }

  export type CreditHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    reason: string
    amount: number
    createdAt?: Date | string
  }

  export type CreditHistoryUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditHistoryNestedInput
  }

  export type CreditHistoryUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditHistoryCreateManyInput = {
    id?: string
    userId: string
    reason: string
    amount: number
    createdAt?: Date | string
  }

  export type CreditHistoryUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditHistoryUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    username: string
    firstname?: string | null
    lastname?: string | null
    password: string
    avatarUrl?: string | null
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    username: string
    firstname?: string | null
    lastname?: string | null
    password: string
    avatarUrl?: string | null
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateManyInput = {
    id?: string
    username: string
    firstname?: string | null
    lastname?: string | null
    password: string
    avatarUrl?: string | null
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    savedBy?: SavedPostCreateNestedManyWithoutPostInput
    likedBy?: LikedPostCreateNestedManyWithoutPostInput
    reportedBy?: ReportedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    savedBy?: SavedPostUncheckedCreateNestedManyWithoutPostInput
    likedBy?: LikedPostUncheckedCreateNestedManyWithoutPostInput
    reportedBy?: ReportedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedPostUpdateManyWithoutPostNestedInput
    likedBy?: LikedPostUpdateManyWithoutPostNestedInput
    reportedBy?: ReportedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
    likedBy?: LikedPostUncheckedUpdateManyWithoutPostNestedInput
    reportedBy?: ReportedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LikedPostCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikedPostsInput
    post: PostCreateNestedOneWithoutLikedByInput
  }

  export type LikedPostUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
  }

  export type LikedPostUpdateInput = {
    user?: UserUpdateOneRequiredWithoutLikedPostsNestedInput
    post?: PostUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedPostUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LikedPostCreateManyInput = {
    id?: string
    userId: string
    postId: string
  }

  export type LikedPostUpdateManyMutationInput = {

  }

  export type LikedPostUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutSavedPostsInput
    post: PostCreateNestedOneWithoutSavedByInput
  }

  export type SavedPostUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
  }

  export type SavedPostUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSavedPostsNestedInput
    post?: PostUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedPostUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostCreateManyInput = {
    id?: string
    userId: string
    postId: string
  }

  export type SavedPostUpdateManyMutationInput = {

  }

  export type SavedPostUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportedPostCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutReportedPostsInput
    post: PostCreateNestedOneWithoutReportedByInput
  }

  export type ReportedPostUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
  }

  export type ReportedPostUpdateInput = {
    user?: UserUpdateOneRequiredWithoutReportedPostsNestedInput
    post?: PostUpdateOneRequiredWithoutReportedByNestedInput
  }

  export type ReportedPostUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportedPostCreateManyInput = {
    id?: string
    userId: string
    postId: string
  }

  export type ReportedPostUpdateManyMutationInput = {

  }

  export type ReportedPostUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type CreditHistoryListRelationFilter = {
    every?: CreditHistoryWhereInput
    some?: CreditHistoryWhereInput
    none?: CreditHistoryWhereInput
  }

  export type SavedPostListRelationFilter = {
    every?: SavedPostWhereInput
    some?: SavedPostWhereInput
    none?: SavedPostWhereInput
  }

  export type LikedPostListRelationFilter = {
    every?: LikedPostWhereInput
    some?: LikedPostWhereInput
    none?: LikedPostWhereInput
  }

  export type ReportedPostListRelationFilter = {
    every?: ReportedPostWhereInput
    some?: ReportedPostWhereInput
    none?: ReportedPostWhereInput
  }

  export type CreditHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    website?: SortOrder
    Credits?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    Credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    website?: SortOrder
    Credits?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    website?: SortOrder
    Credits?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    Credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CreditHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CreditHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditHistorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    reports?: SortOrder
    platform?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    likes?: SortOrder
    reports?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    likes?: SortOrder
    reports?: SortOrder
    platform?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    likes?: SortOrder
    reports?: SortOrder
    platform?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    likes?: SortOrder
    reports?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type LikedPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type LikedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type LikedPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SavedPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SavedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SavedPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type ReportedPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type ReportedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type ReportedPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CreditHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditHistoryCreateWithoutUserInput, CreditHistoryUncheckedCreateWithoutUserInput> | CreditHistoryCreateWithoutUserInput[] | CreditHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditHistoryCreateOrConnectWithoutUserInput | CreditHistoryCreateOrConnectWithoutUserInput[]
    createMany?: CreditHistoryCreateManyUserInputEnvelope
    connect?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type LikedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedPostCreateWithoutUserInput, LikedPostUncheckedCreateWithoutUserInput> | LikedPostCreateWithoutUserInput[] | LikedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutUserInput | LikedPostCreateOrConnectWithoutUserInput[]
    createMany?: LikedPostCreateManyUserInputEnvelope
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
  }

  export type ReportedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportedPostCreateWithoutUserInput, ReportedPostUncheckedCreateWithoutUserInput> | ReportedPostCreateWithoutUserInput[] | ReportedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutUserInput | ReportedPostCreateOrConnectWithoutUserInput[]
    createMany?: ReportedPostCreateManyUserInputEnvelope
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
  }

  export type CreditHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditHistoryCreateWithoutUserInput, CreditHistoryUncheckedCreateWithoutUserInput> | CreditHistoryCreateWithoutUserInput[] | CreditHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditHistoryCreateOrConnectWithoutUserInput | CreditHistoryCreateOrConnectWithoutUserInput[]
    createMany?: CreditHistoryCreateManyUserInputEnvelope
    connect?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type LikedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedPostCreateWithoutUserInput, LikedPostUncheckedCreateWithoutUserInput> | LikedPostCreateWithoutUserInput[] | LikedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutUserInput | LikedPostCreateOrConnectWithoutUserInput[]
    createMany?: LikedPostCreateManyUserInputEnvelope
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
  }

  export type ReportedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportedPostCreateWithoutUserInput, ReportedPostUncheckedCreateWithoutUserInput> | ReportedPostCreateWithoutUserInput[] | ReportedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutUserInput | ReportedPostCreateOrConnectWithoutUserInput[]
    createMany?: ReportedPostCreateManyUserInputEnvelope
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type CreditHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditHistoryCreateWithoutUserInput, CreditHistoryUncheckedCreateWithoutUserInput> | CreditHistoryCreateWithoutUserInput[] | CreditHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditHistoryCreateOrConnectWithoutUserInput | CreditHistoryCreateOrConnectWithoutUserInput[]
    upsert?: CreditHistoryUpsertWithWhereUniqueWithoutUserInput | CreditHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditHistoryCreateManyUserInputEnvelope
    set?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    disconnect?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    delete?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    connect?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    update?: CreditHistoryUpdateWithWhereUniqueWithoutUserInput | CreditHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditHistoryUpdateManyWithWhereWithoutUserInput | CreditHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditHistoryScalarWhereInput | CreditHistoryScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type LikedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedPostCreateWithoutUserInput, LikedPostUncheckedCreateWithoutUserInput> | LikedPostCreateWithoutUserInput[] | LikedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutUserInput | LikedPostCreateOrConnectWithoutUserInput[]
    upsert?: LikedPostUpsertWithWhereUniqueWithoutUserInput | LikedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedPostCreateManyUserInputEnvelope
    set?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    disconnect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    delete?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    update?: LikedPostUpdateWithWhereUniqueWithoutUserInput | LikedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedPostUpdateManyWithWhereWithoutUserInput | LikedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedPostScalarWhereInput | LikedPostScalarWhereInput[]
  }

  export type ReportedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportedPostCreateWithoutUserInput, ReportedPostUncheckedCreateWithoutUserInput> | ReportedPostCreateWithoutUserInput[] | ReportedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutUserInput | ReportedPostCreateOrConnectWithoutUserInput[]
    upsert?: ReportedPostUpsertWithWhereUniqueWithoutUserInput | ReportedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportedPostCreateManyUserInputEnvelope
    set?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    disconnect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    delete?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    update?: ReportedPostUpdateWithWhereUniqueWithoutUserInput | ReportedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportedPostUpdateManyWithWhereWithoutUserInput | ReportedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportedPostScalarWhereInput | ReportedPostScalarWhereInput[]
  }

  export type CreditHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditHistoryCreateWithoutUserInput, CreditHistoryUncheckedCreateWithoutUserInput> | CreditHistoryCreateWithoutUserInput[] | CreditHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditHistoryCreateOrConnectWithoutUserInput | CreditHistoryCreateOrConnectWithoutUserInput[]
    upsert?: CreditHistoryUpsertWithWhereUniqueWithoutUserInput | CreditHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditHistoryCreateManyUserInputEnvelope
    set?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    disconnect?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    delete?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    connect?: CreditHistoryWhereUniqueInput | CreditHistoryWhereUniqueInput[]
    update?: CreditHistoryUpdateWithWhereUniqueWithoutUserInput | CreditHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditHistoryUpdateManyWithWhereWithoutUserInput | CreditHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditHistoryScalarWhereInput | CreditHistoryScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type LikedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedPostCreateWithoutUserInput, LikedPostUncheckedCreateWithoutUserInput> | LikedPostCreateWithoutUserInput[] | LikedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutUserInput | LikedPostCreateOrConnectWithoutUserInput[]
    upsert?: LikedPostUpsertWithWhereUniqueWithoutUserInput | LikedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedPostCreateManyUserInputEnvelope
    set?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    disconnect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    delete?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    update?: LikedPostUpdateWithWhereUniqueWithoutUserInput | LikedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedPostUpdateManyWithWhereWithoutUserInput | LikedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedPostScalarWhereInput | LikedPostScalarWhereInput[]
  }

  export type ReportedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportedPostCreateWithoutUserInput, ReportedPostUncheckedCreateWithoutUserInput> | ReportedPostCreateWithoutUserInput[] | ReportedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutUserInput | ReportedPostCreateOrConnectWithoutUserInput[]
    upsert?: ReportedPostUpsertWithWhereUniqueWithoutUserInput | ReportedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportedPostCreateManyUserInputEnvelope
    set?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    disconnect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    delete?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    update?: ReportedPostUpdateWithWhereUniqueWithoutUserInput | ReportedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportedPostUpdateManyWithWhereWithoutUserInput | ReportedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportedPostScalarWhereInput | ReportedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreditHistoryInput = {
    create?: XOR<UserCreateWithoutCreditHistoryInput, UserUncheckedCreateWithoutCreditHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCreditHistoryNestedInput = {
    create?: XOR<UserCreateWithoutCreditHistoryInput, UserUncheckedCreateWithoutCreditHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditHistoryInput
    upsert?: UserUpsertWithoutCreditHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditHistoryInput, UserUpdateWithoutCreditHistoryInput>, UserUncheckedUpdateWithoutCreditHistoryInput>
  }

  export type PostCreatecommentsInput = {
    set: string[]
  }

  export type SavedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type LikedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<LikedPostCreateWithoutPostInput, LikedPostUncheckedCreateWithoutPostInput> | LikedPostCreateWithoutPostInput[] | LikedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutPostInput | LikedPostCreateOrConnectWithoutPostInput[]
    createMany?: LikedPostCreateManyPostInputEnvelope
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
  }

  export type ReportedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportedPostCreateWithoutPostInput, ReportedPostUncheckedCreateWithoutPostInput> | ReportedPostCreateWithoutPostInput[] | ReportedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutPostInput | ReportedPostCreateOrConnectWithoutPostInput[]
    createMany?: ReportedPostCreateManyPostInputEnvelope
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type LikedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikedPostCreateWithoutPostInput, LikedPostUncheckedCreateWithoutPostInput> | LikedPostCreateWithoutPostInput[] | LikedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutPostInput | LikedPostCreateOrConnectWithoutPostInput[]
    createMany?: LikedPostCreateManyPostInputEnvelope
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
  }

  export type ReportedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportedPostCreateWithoutPostInput, ReportedPostUncheckedCreateWithoutPostInput> | ReportedPostCreateWithoutPostInput[] | ReportedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutPostInput | ReportedPostCreateOrConnectWithoutPostInput[]
    createMany?: ReportedPostCreateManyPostInputEnvelope
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
  }

  export type PostUpdatecommentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SavedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type LikedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikedPostCreateWithoutPostInput, LikedPostUncheckedCreateWithoutPostInput> | LikedPostCreateWithoutPostInput[] | LikedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutPostInput | LikedPostCreateOrConnectWithoutPostInput[]
    upsert?: LikedPostUpsertWithWhereUniqueWithoutPostInput | LikedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikedPostCreateManyPostInputEnvelope
    set?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    disconnect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    delete?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    update?: LikedPostUpdateWithWhereUniqueWithoutPostInput | LikedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikedPostUpdateManyWithWhereWithoutPostInput | LikedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikedPostScalarWhereInput | LikedPostScalarWhereInput[]
  }

  export type ReportedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportedPostCreateWithoutPostInput, ReportedPostUncheckedCreateWithoutPostInput> | ReportedPostCreateWithoutPostInput[] | ReportedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutPostInput | ReportedPostCreateOrConnectWithoutPostInput[]
    upsert?: ReportedPostUpsertWithWhereUniqueWithoutPostInput | ReportedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportedPostCreateManyPostInputEnvelope
    set?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    disconnect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    delete?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    update?: ReportedPostUpdateWithWhereUniqueWithoutPostInput | ReportedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportedPostUpdateManyWithWhereWithoutPostInput | ReportedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportedPostScalarWhereInput | ReportedPostScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type LikedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikedPostCreateWithoutPostInput, LikedPostUncheckedCreateWithoutPostInput> | LikedPostCreateWithoutPostInput[] | LikedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikedPostCreateOrConnectWithoutPostInput | LikedPostCreateOrConnectWithoutPostInput[]
    upsert?: LikedPostUpsertWithWhereUniqueWithoutPostInput | LikedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikedPostCreateManyPostInputEnvelope
    set?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    disconnect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    delete?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    connect?: LikedPostWhereUniqueInput | LikedPostWhereUniqueInput[]
    update?: LikedPostUpdateWithWhereUniqueWithoutPostInput | LikedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikedPostUpdateManyWithWhereWithoutPostInput | LikedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikedPostScalarWhereInput | LikedPostScalarWhereInput[]
  }

  export type ReportedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportedPostCreateWithoutPostInput, ReportedPostUncheckedCreateWithoutPostInput> | ReportedPostCreateWithoutPostInput[] | ReportedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportedPostCreateOrConnectWithoutPostInput | ReportedPostCreateOrConnectWithoutPostInput[]
    upsert?: ReportedPostUpsertWithWhereUniqueWithoutPostInput | ReportedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportedPostCreateManyPostInputEnvelope
    set?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    disconnect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    delete?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    connect?: ReportedPostWhereUniqueInput | ReportedPostWhereUniqueInput[]
    update?: ReportedPostUpdateWithWhereUniqueWithoutPostInput | ReportedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportedPostUpdateManyWithWhereWithoutPostInput | ReportedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportedPostScalarWhereInput | ReportedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikedPostsInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutLikedByInput = {
    create?: XOR<PostCreateWithoutLikedByInput, PostUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikedByInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedPostsNestedInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput
    upsert?: UserUpsertWithoutLikedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedPostsInput, UserUpdateWithoutLikedPostsInput>, UserUncheckedUpdateWithoutLikedPostsInput>
  }

  export type PostUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<PostCreateWithoutLikedByInput, PostUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikedByInput
    upsert?: PostUpsertWithoutLikedByInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikedByInput, PostUpdateWithoutLikedByInput>, PostUncheckedUpdateWithoutLikedByInput>
  }

  export type UserCreateNestedOneWithoutSavedPostsInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutSavedByInput = {
    create?: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavedByInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput
    upsert?: UserUpsertWithoutSavedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedPostsInput, UserUpdateWithoutSavedPostsInput>, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type PostUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavedByInput
    upsert?: PostUpsertWithoutSavedByInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSavedByInput, PostUpdateWithoutSavedByInput>, PostUncheckedUpdateWithoutSavedByInput>
  }

  export type UserCreateNestedOneWithoutReportedPostsInput = {
    create?: XOR<UserCreateWithoutReportedPostsInput, UserUncheckedCreateWithoutReportedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutReportedByInput = {
    create?: XOR<PostCreateWithoutReportedByInput, PostUncheckedCreateWithoutReportedByInput>
    connectOrCreate?: PostCreateOrConnectWithoutReportedByInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportedPostsNestedInput = {
    create?: XOR<UserCreateWithoutReportedPostsInput, UserUncheckedCreateWithoutReportedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportedPostsInput
    upsert?: UserUpsertWithoutReportedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportedPostsInput, UserUpdateWithoutReportedPostsInput>, UserUncheckedUpdateWithoutReportedPostsInput>
  }

  export type PostUpdateOneRequiredWithoutReportedByNestedInput = {
    create?: XOR<PostCreateWithoutReportedByInput, PostUncheckedCreateWithoutReportedByInput>
    connectOrCreate?: PostCreateOrConnectWithoutReportedByInput
    upsert?: PostUpsertWithoutReportedByInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutReportedByInput, PostUpdateWithoutReportedByInput>, PostUncheckedUpdateWithoutReportedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CreditHistoryCreateWithoutUserInput = {
    id?: string
    reason: string
    amount: number
    createdAt?: Date | string
  }

  export type CreditHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    reason: string
    amount: number
    createdAt?: Date | string
  }

  export type CreditHistoryCreateOrConnectWithoutUserInput = {
    where: CreditHistoryWhereUniqueInput
    create: XOR<CreditHistoryCreateWithoutUserInput, CreditHistoryUncheckedCreateWithoutUserInput>
  }

  export type CreditHistoryCreateManyUserInputEnvelope = {
    data: CreditHistoryCreateManyUserInput | CreditHistoryCreateManyUserInput[]
  }

  export type SavedPostCreateWithoutUserInput = {
    id?: string
    post: PostCreateNestedOneWithoutSavedByInput
  }

  export type SavedPostUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
  }

  export type SavedPostCreateOrConnectWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostCreateManyUserInputEnvelope = {
    data: SavedPostCreateManyUserInput | SavedPostCreateManyUserInput[]
  }

  export type LikedPostCreateWithoutUserInput = {
    id?: string
    post: PostCreateNestedOneWithoutLikedByInput
  }

  export type LikedPostUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
  }

  export type LikedPostCreateOrConnectWithoutUserInput = {
    where: LikedPostWhereUniqueInput
    create: XOR<LikedPostCreateWithoutUserInput, LikedPostUncheckedCreateWithoutUserInput>
  }

  export type LikedPostCreateManyUserInputEnvelope = {
    data: LikedPostCreateManyUserInput | LikedPostCreateManyUserInput[]
  }

  export type ReportedPostCreateWithoutUserInput = {
    id?: string
    post: PostCreateNestedOneWithoutReportedByInput
  }

  export type ReportedPostUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
  }

  export type ReportedPostCreateOrConnectWithoutUserInput = {
    where: ReportedPostWhereUniqueInput
    create: XOR<ReportedPostCreateWithoutUserInput, ReportedPostUncheckedCreateWithoutUserInput>
  }

  export type ReportedPostCreateManyUserInputEnvelope = {
    data: ReportedPostCreateManyUserInput | ReportedPostCreateManyUserInput[]
  }

  export type CreditHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditHistoryWhereUniqueInput
    update: XOR<CreditHistoryUpdateWithoutUserInput, CreditHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<CreditHistoryCreateWithoutUserInput, CreditHistoryUncheckedCreateWithoutUserInput>
  }

  export type CreditHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditHistoryWhereUniqueInput
    data: XOR<CreditHistoryUpdateWithoutUserInput, CreditHistoryUncheckedUpdateWithoutUserInput>
  }

  export type CreditHistoryUpdateManyWithWhereWithoutUserInput = {
    where: CreditHistoryScalarWhereInput
    data: XOR<CreditHistoryUpdateManyMutationInput, CreditHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditHistoryScalarWhereInput = {
    AND?: CreditHistoryScalarWhereInput | CreditHistoryScalarWhereInput[]
    OR?: CreditHistoryScalarWhereInput[]
    NOT?: CreditHistoryScalarWhereInput | CreditHistoryScalarWhereInput[]
    id?: StringFilter<"CreditHistory"> | string
    userId?: StringFilter<"CreditHistory"> | string
    reason?: StringFilter<"CreditHistory"> | string
    amount?: IntFilter<"CreditHistory"> | number
    createdAt?: DateTimeFilter<"CreditHistory"> | Date | string
  }

  export type SavedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutUserInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedPostScalarWhereInput = {
    AND?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    OR?: SavedPostScalarWhereInput[]
    NOT?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
  }

  export type LikedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedPostWhereUniqueInput
    update: XOR<LikedPostUpdateWithoutUserInput, LikedPostUncheckedUpdateWithoutUserInput>
    create: XOR<LikedPostCreateWithoutUserInput, LikedPostUncheckedCreateWithoutUserInput>
  }

  export type LikedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedPostWhereUniqueInput
    data: XOR<LikedPostUpdateWithoutUserInput, LikedPostUncheckedUpdateWithoutUserInput>
  }

  export type LikedPostUpdateManyWithWhereWithoutUserInput = {
    where: LikedPostScalarWhereInput
    data: XOR<LikedPostUpdateManyMutationInput, LikedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedPostScalarWhereInput = {
    AND?: LikedPostScalarWhereInput | LikedPostScalarWhereInput[]
    OR?: LikedPostScalarWhereInput[]
    NOT?: LikedPostScalarWhereInput | LikedPostScalarWhereInput[]
    id?: StringFilter<"LikedPost"> | string
    userId?: StringFilter<"LikedPost"> | string
    postId?: StringFilter<"LikedPost"> | string
  }

  export type ReportedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportedPostWhereUniqueInput
    update: XOR<ReportedPostUpdateWithoutUserInput, ReportedPostUncheckedUpdateWithoutUserInput>
    create: XOR<ReportedPostCreateWithoutUserInput, ReportedPostUncheckedCreateWithoutUserInput>
  }

  export type ReportedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportedPostWhereUniqueInput
    data: XOR<ReportedPostUpdateWithoutUserInput, ReportedPostUncheckedUpdateWithoutUserInput>
  }

  export type ReportedPostUpdateManyWithWhereWithoutUserInput = {
    where: ReportedPostScalarWhereInput
    data: XOR<ReportedPostUpdateManyMutationInput, ReportedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportedPostScalarWhereInput = {
    AND?: ReportedPostScalarWhereInput | ReportedPostScalarWhereInput[]
    OR?: ReportedPostScalarWhereInput[]
    NOT?: ReportedPostScalarWhereInput | ReportedPostScalarWhereInput[]
    id?: StringFilter<"ReportedPost"> | string
    userId?: StringFilter<"ReportedPost"> | string
    postId?: StringFilter<"ReportedPost"> | string
  }

  export type UserCreateWithoutCreditHistoryInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditHistoryInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostUncheckedCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditHistoryInput, UserUncheckedCreateWithoutCreditHistoryInput>
  }

  export type UserUpsertWithoutCreditHistoryInput = {
    update: XOR<UserUpdateWithoutCreditHistoryInput, UserUncheckedUpdateWithoutCreditHistoryInput>
    create: XOR<UserCreateWithoutCreditHistoryInput, UserUncheckedCreateWithoutCreditHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditHistoryInput, UserUncheckedUpdateWithoutCreditHistoryInput>
  }

  export type UserUpdateWithoutCreditHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUncheckedUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedPostCreateWithoutPostInput = {
    id?: string
    user: UserCreateNestedOneWithoutSavedPostsInput
  }

  export type SavedPostUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
  }

  export type SavedPostCreateOrConnectWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostCreateManyPostInputEnvelope = {
    data: SavedPostCreateManyPostInput | SavedPostCreateManyPostInput[]
  }

  export type LikedPostCreateWithoutPostInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikedPostsInput
  }

  export type LikedPostUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
  }

  export type LikedPostCreateOrConnectWithoutPostInput = {
    where: LikedPostWhereUniqueInput
    create: XOR<LikedPostCreateWithoutPostInput, LikedPostUncheckedCreateWithoutPostInput>
  }

  export type LikedPostCreateManyPostInputEnvelope = {
    data: LikedPostCreateManyPostInput | LikedPostCreateManyPostInput[]
  }

  export type ReportedPostCreateWithoutPostInput = {
    id?: string
    user: UserCreateNestedOneWithoutReportedPostsInput
  }

  export type ReportedPostUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
  }

  export type ReportedPostCreateOrConnectWithoutPostInput = {
    where: ReportedPostWhereUniqueInput
    create: XOR<ReportedPostCreateWithoutPostInput, ReportedPostUncheckedCreateWithoutPostInput>
  }

  export type ReportedPostCreateManyPostInputEnvelope = {
    data: ReportedPostCreateManyPostInput | ReportedPostCreateManyPostInput[]
  }

  export type SavedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutPostInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type LikedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: LikedPostWhereUniqueInput
    update: XOR<LikedPostUpdateWithoutPostInput, LikedPostUncheckedUpdateWithoutPostInput>
    create: XOR<LikedPostCreateWithoutPostInput, LikedPostUncheckedCreateWithoutPostInput>
  }

  export type LikedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: LikedPostWhereUniqueInput
    data: XOR<LikedPostUpdateWithoutPostInput, LikedPostUncheckedUpdateWithoutPostInput>
  }

  export type LikedPostUpdateManyWithWhereWithoutPostInput = {
    where: LikedPostScalarWhereInput
    data: XOR<LikedPostUpdateManyMutationInput, LikedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type ReportedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: ReportedPostWhereUniqueInput
    update: XOR<ReportedPostUpdateWithoutPostInput, ReportedPostUncheckedUpdateWithoutPostInput>
    create: XOR<ReportedPostCreateWithoutPostInput, ReportedPostUncheckedCreateWithoutPostInput>
  }

  export type ReportedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: ReportedPostWhereUniqueInput
    data: XOR<ReportedPostUpdateWithoutPostInput, ReportedPostUncheckedUpdateWithoutPostInput>
  }

  export type ReportedPostUpdateManyWithWhereWithoutPostInput = {
    where: ReportedPostScalarWhereInput
    data: XOR<ReportedPostUpdateManyMutationInput, ReportedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutLikedPostsInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedPostsInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryUncheckedCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
  }

  export type PostCreateWithoutLikedByInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    savedBy?: SavedPostCreateNestedManyWithoutPostInput
    reportedBy?: ReportedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikedByInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    savedBy?: SavedPostUncheckedCreateNestedManyWithoutPostInput
    reportedBy?: ReportedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikedByInput, PostUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikedPostsInput = {
    update: XOR<UserUpdateWithoutLikedPostsInput, UserUncheckedUpdateWithoutLikedPostsInput>
    create: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedPostsInput, UserUncheckedUpdateWithoutLikedPostsInput>
  }

  export type UserUpdateWithoutLikedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUncheckedUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutLikedByInput = {
    update: XOR<PostUpdateWithoutLikedByInput, PostUncheckedUpdateWithoutLikedByInput>
    create: XOR<PostCreateWithoutLikedByInput, PostUncheckedCreateWithoutLikedByInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikedByInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikedByInput, PostUncheckedUpdateWithoutLikedByInput>
  }

  export type PostUpdateWithoutLikedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedPostUpdateManyWithoutPostNestedInput
    reportedBy?: ReportedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
    reportedBy?: ReportedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutSavedPostsInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedPostsInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostUncheckedCreateNestedManyWithoutUserInput
    reportedPosts?: ReportedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
  }

  export type PostCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    likedBy?: LikedPostCreateNestedManyWithoutPostInput
    reportedBy?: ReportedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    likedBy?: LikedPostUncheckedCreateNestedManyWithoutPostInput
    reportedBy?: ReportedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSavedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedPostsInput = {
    update: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type UserUpdateWithoutSavedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUncheckedUpdateManyWithoutUserNestedInput
    reportedPosts?: ReportedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutSavedByInput = {
    update: XOR<PostUpdateWithoutSavedByInput, PostUncheckedUpdateWithoutSavedByInput>
    create: XOR<PostCreateWithoutSavedByInput, PostUncheckedCreateWithoutSavedByInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSavedByInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSavedByInput, PostUncheckedUpdateWithoutSavedByInput>
  }

  export type PostUpdateWithoutSavedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    likedBy?: LikedPostUpdateManyWithoutPostNestedInput
    reportedBy?: ReportedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSavedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    likedBy?: LikedPostUncheckedUpdateManyWithoutPostNestedInput
    reportedBy?: ReportedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutReportedPostsInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportedPostsInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    firstname?: string | null
    lastname?: string | null
    bio?: string | null
    avatarUrl?: string | null
    location?: string | null
    website?: string | null
    Credits?: number
    lastLogin?: Date | string | null
    creditHistory?: CreditHistoryUncheckedCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: LikedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportedPostsInput, UserUncheckedCreateWithoutReportedPostsInput>
  }

  export type PostCreateWithoutReportedByInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    savedBy?: SavedPostCreateNestedManyWithoutPostInput
    likedBy?: LikedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutReportedByInput = {
    id?: string
    title: string
    description: string
    likes?: number
    comments?: PostCreatecommentsInput | string[]
    reports?: number
    platform: string
    savedBy?: SavedPostUncheckedCreateNestedManyWithoutPostInput
    likedBy?: LikedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutReportedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReportedByInput, PostUncheckedCreateWithoutReportedByInput>
  }

  export type UserUpsertWithoutReportedPostsInput = {
    update: XOR<UserUpdateWithoutReportedPostsInput, UserUncheckedUpdateWithoutReportedPostsInput>
    create: XOR<UserCreateWithoutReportedPostsInput, UserUncheckedCreateWithoutReportedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportedPostsInput, UserUncheckedUpdateWithoutReportedPostsInput>
  }

  export type UserUpdateWithoutReportedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    Credits?: IntFieldUpdateOperationsInput | number
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditHistory?: CreditHistoryUncheckedUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    likedPosts?: LikedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutReportedByInput = {
    update: XOR<PostUpdateWithoutReportedByInput, PostUncheckedUpdateWithoutReportedByInput>
    create: XOR<PostCreateWithoutReportedByInput, PostUncheckedCreateWithoutReportedByInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutReportedByInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutReportedByInput, PostUncheckedUpdateWithoutReportedByInput>
  }

  export type PostUpdateWithoutReportedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedPostUpdateManyWithoutPostNestedInput
    likedBy?: LikedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutReportedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    comments?: PostUpdatecommentsInput | string[]
    reports?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
    likedBy?: LikedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CreditHistoryCreateManyUserInput = {
    id?: string
    reason: string
    amount: number
    createdAt?: Date | string
  }

  export type SavedPostCreateManyUserInput = {
    id?: string
    postId: string
  }

  export type LikedPostCreateManyUserInput = {
    id?: string
    postId: string
  }

  export type ReportedPostCreateManyUserInput = {
    id?: string
    postId: string
  }

  export type CreditHistoryUpdateWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditHistoryUncheckedUpdateWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditHistoryUncheckedUpdateManyWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LikedPostUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedPostUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LikedPostUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportedPostUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutReportedByNestedInput
  }

  export type ReportedPostUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportedPostUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostCreateManyPostInput = {
    id?: string
    userId: string
  }

  export type LikedPostCreateManyPostInput = {
    id?: string
    userId: string
  }

  export type ReportedPostCreateManyPostInput = {
    id?: string
    userId: string
  }

  export type SavedPostUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutSavedPostsNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LikedPostUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutLikedPostsNestedInput
  }

  export type LikedPostUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LikedPostUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportedPostUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutReportedPostsNestedInput
  }

  export type ReportedPostUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReportedPostUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}