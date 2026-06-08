
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Evolucao
 * 
 */
export type Evolucao = $Result.DefaultSelection<Prisma.$EvolucaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evolucao`: Exposes CRUD operations for the **Evolucao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evolucaos
    * const evolucaos = await prisma.evolucao.findMany()
    * ```
    */
  get evolucao(): Prisma.EvolucaoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Paciente: 'Paciente',
    Evento: 'Evento',
    Evolucao: 'Evolucao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "paciente" | "evento" | "evolucao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Evolucao: {
        payload: Prisma.$EvolucaoPayload<ExtArgs>
        fields: Prisma.EvolucaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvolucaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvolucaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>
          }
          findFirst: {
            args: Prisma.EvolucaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvolucaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>
          }
          findMany: {
            args: Prisma.EvolucaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>[]
          }
          create: {
            args: Prisma.EvolucaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>
          }
          createMany: {
            args: Prisma.EvolucaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvolucaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>[]
          }
          delete: {
            args: Prisma.EvolucaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>
          }
          update: {
            args: Prisma.EvolucaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>
          }
          deleteMany: {
            args: Prisma.EvolucaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvolucaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvolucaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>[]
          }
          upsert: {
            args: Prisma.EvolucaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolucaoPayload>
          }
          aggregate: {
            args: Prisma.EvolucaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvolucao>
          }
          groupBy: {
            args: Prisma.EvolucaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvolucaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvolucaoCountArgs<ExtArgs>
            result: $Utils.Optional<EvolucaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    paciente?: PacienteOmit
    evento?: EventoOmit
    evolucao?: EvolucaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    eventos: number
    evolucoes: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | PacienteCountOutputTypeCountEventosArgs
    evolucoes?: boolean | PacienteCountOutputTypeCountEvolucoesArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountEvolucoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolucaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    dataNascimento: Date | null
    telefone: string | null
    email: string | null
    cpf: string | null
    endereco: string | null
    profissao: string | null
    origem: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    dataNascimento: Date | null
    telefone: string | null
    email: string | null
    cpf: string | null
    endereco: string | null
    profissao: string | null
    origem: string | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nome: number
    dataNascimento: number
    telefone: number
    email: number
    cpf: number
    endereco: number
    profissao: number
    origem: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    cpf?: true
    endereco?: true
    profissao?: true
    origem?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    cpf?: true
    endereco?: true
    profissao?: true
    origem?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    cpf?: true
    endereco?: true
    profissao?: true
    origem?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nome: string
    dataNascimento: Date
    telefone: string | null
    email: string | null
    cpf: string | null
    endereco: string | null
    profissao: string | null
    origem: string | null
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    cpf?: boolean
    endereco?: boolean
    profissao?: boolean
    origem?: boolean
    eventos?: boolean | Paciente$eventosArgs<ExtArgs>
    evolucoes?: boolean | Paciente$evolucoesArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    cpf?: boolean
    endereco?: boolean
    profissao?: boolean
    origem?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    cpf?: boolean
    endereco?: boolean
    profissao?: boolean
    origem?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    cpf?: boolean
    endereco?: boolean
    profissao?: boolean
    origem?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "dataNascimento" | "telefone" | "email" | "cpf" | "endereco" | "profissao" | "origem", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | Paciente$eventosArgs<ExtArgs>
    evolucoes?: boolean | Paciente$evolucoesArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      eventos: Prisma.$EventoPayload<ExtArgs>[]
      evolucoes: Prisma.$EvolucaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      dataNascimento: Date
      telefone: string | null
      email: string | null
      cpf: string | null
      endereco: string | null
      profissao: string | null
      origem: string | null
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends Paciente$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evolucoes<T extends Paciente$evolucoesArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$evolucoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly dataNascimento: FieldRef<"Paciente", 'DateTime'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly endereco: FieldRef<"Paciente", 'String'>
    readonly profissao: FieldRef<"Paciente", 'String'>
    readonly origem: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.eventos
   */
  export type Paciente$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Paciente.evolucoes
   */
  export type Paciente$evolucoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    where?: EvolucaoWhereInput
    orderBy?: EvolucaoOrderByWithRelationInput | EvolucaoOrderByWithRelationInput[]
    cursor?: EvolucaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvolucaoScalarFieldEnum | EvolucaoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    titulo: string | null
    data: Date | null
    horarioInicio: Date | null
    horarioFim: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    titulo: string | null
    data: Date | null
    horarioInicio: Date | null
    horarioFim: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    pacienteId: number
    titulo: number
    data: number
    horarioInicio: number
    horarioFim: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    pacienteId?: true
    titulo?: true
    data?: true
    horarioInicio?: true
    horarioFim?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    titulo?: true
    data?: true
    horarioInicio?: true
    horarioFim?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    pacienteId?: true
    titulo?: true
    data?: true
    horarioInicio?: true
    horarioFim?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    pacienteId: number
    titulo: string
    data: Date
    horarioInicio: Date
    horarioFim: Date
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "titulo" | "data" | "horarioInicio" | "horarioFim", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteId: number
      titulo: string
      data: Date
      horarioInicio: Date
      horarioFim: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly pacienteId: FieldRef<"Evento", 'Int'>
    readonly titulo: FieldRef<"Evento", 'String'>
    readonly data: FieldRef<"Evento", 'DateTime'>
    readonly horarioInicio: FieldRef<"Evento", 'DateTime'>
    readonly horarioFim: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Evolucao
   */

  export type AggregateEvolucao = {
    _count: EvolucaoCountAggregateOutputType | null
    _avg: EvolucaoAvgAggregateOutputType | null
    _sum: EvolucaoSumAggregateOutputType | null
    _min: EvolucaoMinAggregateOutputType | null
    _max: EvolucaoMaxAggregateOutputType | null
  }

  export type EvolucaoAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type EvolucaoSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type EvolucaoMinAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    titulo: string | null
    data: Date | null
    horarioInicio: Date | null
    horarioFim: Date | null
    descricao: string | null
  }

  export type EvolucaoMaxAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    titulo: string | null
    data: Date | null
    horarioInicio: Date | null
    horarioFim: Date | null
    descricao: string | null
  }

  export type EvolucaoCountAggregateOutputType = {
    id: number
    pacienteId: number
    titulo: number
    data: number
    horarioInicio: number
    horarioFim: number
    descricao: number
    _all: number
  }


  export type EvolucaoAvgAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type EvolucaoSumAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type EvolucaoMinAggregateInputType = {
    id?: true
    pacienteId?: true
    titulo?: true
    data?: true
    horarioInicio?: true
    horarioFim?: true
    descricao?: true
  }

  export type EvolucaoMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    titulo?: true
    data?: true
    horarioInicio?: true
    horarioFim?: true
    descricao?: true
  }

  export type EvolucaoCountAggregateInputType = {
    id?: true
    pacienteId?: true
    titulo?: true
    data?: true
    horarioInicio?: true
    horarioFim?: true
    descricao?: true
    _all?: true
  }

  export type EvolucaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evolucao to aggregate.
     */
    where?: EvolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolucaos to fetch.
     */
    orderBy?: EvolucaoOrderByWithRelationInput | EvolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evolucaos
    **/
    _count?: true | EvolucaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvolucaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvolucaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvolucaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvolucaoMaxAggregateInputType
  }

  export type GetEvolucaoAggregateType<T extends EvolucaoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvolucao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvolucao[P]>
      : GetScalarType<T[P], AggregateEvolucao[P]>
  }




  export type EvolucaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolucaoWhereInput
    orderBy?: EvolucaoOrderByWithAggregationInput | EvolucaoOrderByWithAggregationInput[]
    by: EvolucaoScalarFieldEnum[] | EvolucaoScalarFieldEnum
    having?: EvolucaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvolucaoCountAggregateInputType | true
    _avg?: EvolucaoAvgAggregateInputType
    _sum?: EvolucaoSumAggregateInputType
    _min?: EvolucaoMinAggregateInputType
    _max?: EvolucaoMaxAggregateInputType
  }

  export type EvolucaoGroupByOutputType = {
    id: number
    pacienteId: number
    titulo: string
    data: Date
    horarioInicio: Date
    horarioFim: Date
    descricao: string
    _count: EvolucaoCountAggregateOutputType | null
    _avg: EvolucaoAvgAggregateOutputType | null
    _sum: EvolucaoSumAggregateOutputType | null
    _min: EvolucaoMinAggregateOutputType | null
    _max: EvolucaoMaxAggregateOutputType | null
  }

  type GetEvolucaoGroupByPayload<T extends EvolucaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvolucaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvolucaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvolucaoGroupByOutputType[P]>
            : GetScalarType<T[P], EvolucaoGroupByOutputType[P]>
        }
      >
    >


  export type EvolucaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    descricao?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolucao"]>

  export type EvolucaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    descricao?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolucao"]>

  export type EvolucaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    descricao?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolucao"]>

  export type EvolucaoSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    titulo?: boolean
    data?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    descricao?: boolean
  }

  export type EvolucaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "titulo" | "data" | "horarioInicio" | "horarioFim" | "descricao", ExtArgs["result"]["evolucao"]>
  export type EvolucaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type EvolucaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type EvolucaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $EvolucaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evolucao"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteId: number
      titulo: string
      data: Date
      horarioInicio: Date
      horarioFim: Date
      descricao: string
    }, ExtArgs["result"]["evolucao"]>
    composites: {}
  }

  type EvolucaoGetPayload<S extends boolean | null | undefined | EvolucaoDefaultArgs> = $Result.GetResult<Prisma.$EvolucaoPayload, S>

  type EvolucaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvolucaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvolucaoCountAggregateInputType | true
    }

  export interface EvolucaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evolucao'], meta: { name: 'Evolucao' } }
    /**
     * Find zero or one Evolucao that matches the filter.
     * @param {EvolucaoFindUniqueArgs} args - Arguments to find a Evolucao
     * @example
     * // Get one Evolucao
     * const evolucao = await prisma.evolucao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvolucaoFindUniqueArgs>(args: SelectSubset<T, EvolucaoFindUniqueArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evolucao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvolucaoFindUniqueOrThrowArgs} args - Arguments to find a Evolucao
     * @example
     * // Get one Evolucao
     * const evolucao = await prisma.evolucao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvolucaoFindUniqueOrThrowArgs>(args: SelectSubset<T, EvolucaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evolucao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoFindFirstArgs} args - Arguments to find a Evolucao
     * @example
     * // Get one Evolucao
     * const evolucao = await prisma.evolucao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvolucaoFindFirstArgs>(args?: SelectSubset<T, EvolucaoFindFirstArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evolucao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoFindFirstOrThrowArgs} args - Arguments to find a Evolucao
     * @example
     * // Get one Evolucao
     * const evolucao = await prisma.evolucao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvolucaoFindFirstOrThrowArgs>(args?: SelectSubset<T, EvolucaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evolucaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evolucaos
     * const evolucaos = await prisma.evolucao.findMany()
     * 
     * // Get first 10 Evolucaos
     * const evolucaos = await prisma.evolucao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evolucaoWithIdOnly = await prisma.evolucao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvolucaoFindManyArgs>(args?: SelectSubset<T, EvolucaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evolucao.
     * @param {EvolucaoCreateArgs} args - Arguments to create a Evolucao.
     * @example
     * // Create one Evolucao
     * const Evolucao = await prisma.evolucao.create({
     *   data: {
     *     // ... data to create a Evolucao
     *   }
     * })
     * 
     */
    create<T extends EvolucaoCreateArgs>(args: SelectSubset<T, EvolucaoCreateArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evolucaos.
     * @param {EvolucaoCreateManyArgs} args - Arguments to create many Evolucaos.
     * @example
     * // Create many Evolucaos
     * const evolucao = await prisma.evolucao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvolucaoCreateManyArgs>(args?: SelectSubset<T, EvolucaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evolucaos and returns the data saved in the database.
     * @param {EvolucaoCreateManyAndReturnArgs} args - Arguments to create many Evolucaos.
     * @example
     * // Create many Evolucaos
     * const evolucao = await prisma.evolucao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evolucaos and only return the `id`
     * const evolucaoWithIdOnly = await prisma.evolucao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvolucaoCreateManyAndReturnArgs>(args?: SelectSubset<T, EvolucaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evolucao.
     * @param {EvolucaoDeleteArgs} args - Arguments to delete one Evolucao.
     * @example
     * // Delete one Evolucao
     * const Evolucao = await prisma.evolucao.delete({
     *   where: {
     *     // ... filter to delete one Evolucao
     *   }
     * })
     * 
     */
    delete<T extends EvolucaoDeleteArgs>(args: SelectSubset<T, EvolucaoDeleteArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evolucao.
     * @param {EvolucaoUpdateArgs} args - Arguments to update one Evolucao.
     * @example
     * // Update one Evolucao
     * const evolucao = await prisma.evolucao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvolucaoUpdateArgs>(args: SelectSubset<T, EvolucaoUpdateArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evolucaos.
     * @param {EvolucaoDeleteManyArgs} args - Arguments to filter Evolucaos to delete.
     * @example
     * // Delete a few Evolucaos
     * const { count } = await prisma.evolucao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvolucaoDeleteManyArgs>(args?: SelectSubset<T, EvolucaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evolucaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evolucaos
     * const evolucao = await prisma.evolucao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvolucaoUpdateManyArgs>(args: SelectSubset<T, EvolucaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evolucaos and returns the data updated in the database.
     * @param {EvolucaoUpdateManyAndReturnArgs} args - Arguments to update many Evolucaos.
     * @example
     * // Update many Evolucaos
     * const evolucao = await prisma.evolucao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evolucaos and only return the `id`
     * const evolucaoWithIdOnly = await prisma.evolucao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvolucaoUpdateManyAndReturnArgs>(args: SelectSubset<T, EvolucaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evolucao.
     * @param {EvolucaoUpsertArgs} args - Arguments to update or create a Evolucao.
     * @example
     * // Update or create a Evolucao
     * const evolucao = await prisma.evolucao.upsert({
     *   create: {
     *     // ... data to create a Evolucao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evolucao we want to update
     *   }
     * })
     */
    upsert<T extends EvolucaoUpsertArgs>(args: SelectSubset<T, EvolucaoUpsertArgs<ExtArgs>>): Prisma__EvolucaoClient<$Result.GetResult<Prisma.$EvolucaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evolucaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoCountArgs} args - Arguments to filter Evolucaos to count.
     * @example
     * // Count the number of Evolucaos
     * const count = await prisma.evolucao.count({
     *   where: {
     *     // ... the filter for the Evolucaos we want to count
     *   }
     * })
    **/
    count<T extends EvolucaoCountArgs>(
      args?: Subset<T, EvolucaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvolucaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evolucao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvolucaoAggregateArgs>(args: Subset<T, EvolucaoAggregateArgs>): Prisma.PrismaPromise<GetEvolucaoAggregateType<T>>

    /**
     * Group by Evolucao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolucaoGroupByArgs} args - Group by arguments.
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
      T extends EvolucaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvolucaoGroupByArgs['orderBy'] }
        : { orderBy?: EvolucaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvolucaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvolucaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evolucao model
   */
  readonly fields: EvolucaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evolucao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvolucaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evolucao model
   */
  interface EvolucaoFieldRefs {
    readonly id: FieldRef<"Evolucao", 'Int'>
    readonly pacienteId: FieldRef<"Evolucao", 'Int'>
    readonly titulo: FieldRef<"Evolucao", 'String'>
    readonly data: FieldRef<"Evolucao", 'DateTime'>
    readonly horarioInicio: FieldRef<"Evolucao", 'DateTime'>
    readonly horarioFim: FieldRef<"Evolucao", 'DateTime'>
    readonly descricao: FieldRef<"Evolucao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evolucao findUnique
   */
  export type EvolucaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Evolucao to fetch.
     */
    where: EvolucaoWhereUniqueInput
  }

  /**
   * Evolucao findUniqueOrThrow
   */
  export type EvolucaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Evolucao to fetch.
     */
    where: EvolucaoWhereUniqueInput
  }

  /**
   * Evolucao findFirst
   */
  export type EvolucaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Evolucao to fetch.
     */
    where?: EvolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolucaos to fetch.
     */
    orderBy?: EvolucaoOrderByWithRelationInput | EvolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evolucaos.
     */
    cursor?: EvolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolucaos.
     */
    distinct?: EvolucaoScalarFieldEnum | EvolucaoScalarFieldEnum[]
  }

  /**
   * Evolucao findFirstOrThrow
   */
  export type EvolucaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Evolucao to fetch.
     */
    where?: EvolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolucaos to fetch.
     */
    orderBy?: EvolucaoOrderByWithRelationInput | EvolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evolucaos.
     */
    cursor?: EvolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolucaos.
     */
    distinct?: EvolucaoScalarFieldEnum | EvolucaoScalarFieldEnum[]
  }

  /**
   * Evolucao findMany
   */
  export type EvolucaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * Filter, which Evolucaos to fetch.
     */
    where?: EvolucaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolucaos to fetch.
     */
    orderBy?: EvolucaoOrderByWithRelationInput | EvolucaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evolucaos.
     */
    cursor?: EvolucaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolucaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolucaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolucaos.
     */
    distinct?: EvolucaoScalarFieldEnum | EvolucaoScalarFieldEnum[]
  }

  /**
   * Evolucao create
   */
  export type EvolucaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evolucao.
     */
    data: XOR<EvolucaoCreateInput, EvolucaoUncheckedCreateInput>
  }

  /**
   * Evolucao createMany
   */
  export type EvolucaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evolucaos.
     */
    data: EvolucaoCreateManyInput | EvolucaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evolucao createManyAndReturn
   */
  export type EvolucaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * The data used to create many Evolucaos.
     */
    data: EvolucaoCreateManyInput | EvolucaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evolucao update
   */
  export type EvolucaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evolucao.
     */
    data: XOR<EvolucaoUpdateInput, EvolucaoUncheckedUpdateInput>
    /**
     * Choose, which Evolucao to update.
     */
    where: EvolucaoWhereUniqueInput
  }

  /**
   * Evolucao updateMany
   */
  export type EvolucaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evolucaos.
     */
    data: XOR<EvolucaoUpdateManyMutationInput, EvolucaoUncheckedUpdateManyInput>
    /**
     * Filter which Evolucaos to update
     */
    where?: EvolucaoWhereInput
    /**
     * Limit how many Evolucaos to update.
     */
    limit?: number
  }

  /**
   * Evolucao updateManyAndReturn
   */
  export type EvolucaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * The data used to update Evolucaos.
     */
    data: XOR<EvolucaoUpdateManyMutationInput, EvolucaoUncheckedUpdateManyInput>
    /**
     * Filter which Evolucaos to update
     */
    where?: EvolucaoWhereInput
    /**
     * Limit how many Evolucaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evolucao upsert
   */
  export type EvolucaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evolucao to update in case it exists.
     */
    where: EvolucaoWhereUniqueInput
    /**
     * In case the Evolucao found by the `where` argument doesn't exist, create a new Evolucao with this data.
     */
    create: XOR<EvolucaoCreateInput, EvolucaoUncheckedCreateInput>
    /**
     * In case the Evolucao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvolucaoUpdateInput, EvolucaoUncheckedUpdateInput>
  }

  /**
   * Evolucao delete
   */
  export type EvolucaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
    /**
     * Filter which Evolucao to delete.
     */
    where: EvolucaoWhereUniqueInput
  }

  /**
   * Evolucao deleteMany
   */
  export type EvolucaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evolucaos to delete
     */
    where?: EvolucaoWhereInput
    /**
     * Limit how many Evolucaos to delete.
     */
    limit?: number
  }

  /**
   * Evolucao without action
   */
  export type EvolucaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolucao
     */
    select?: EvolucaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolucao
     */
    omit?: EvolucaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolucaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dataNascimento: 'dataNascimento',
    telefone: 'telefone',
    email: 'email',
    cpf: 'cpf',
    endereco: 'endereco',
    profissao: 'profissao',
    origem: 'origem'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    titulo: 'titulo',
    data: 'data',
    horarioInicio: 'horarioInicio',
    horarioFim: 'horarioFim'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const EvolucaoScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    titulo: 'titulo',
    data: 'data',
    horarioInicio: 'horarioInicio',
    horarioFim: 'horarioFim',
    descricao: 'descricao'
  };

  export type EvolucaoScalarFieldEnum = (typeof EvolucaoScalarFieldEnum)[keyof typeof EvolucaoScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    email?: StringNullableFilter<"Paciente"> | string | null
    cpf?: StringNullableFilter<"Paciente"> | string | null
    endereco?: StringNullableFilter<"Paciente"> | string | null
    profissao?: StringNullableFilter<"Paciente"> | string | null
    origem?: StringNullableFilter<"Paciente"> | string | null
    eventos?: EventoListRelationFilter
    evolucoes?: EvolucaoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    profissao?: SortOrderInput | SortOrder
    origem?: SortOrderInput | SortOrder
    eventos?: EventoOrderByRelationAggregateInput
    evolucoes?: EvolucaoOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    email?: StringNullableFilter<"Paciente"> | string | null
    cpf?: StringNullableFilter<"Paciente"> | string | null
    endereco?: StringNullableFilter<"Paciente"> | string | null
    profissao?: StringNullableFilter<"Paciente"> | string | null
    origem?: StringNullableFilter<"Paciente"> | string | null
    eventos?: EventoListRelationFilter
    evolucoes?: EvolucaoListRelationFilter
  }, "id">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    profissao?: SortOrderInput | SortOrder
    origem?: SortOrderInput | SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    telefone?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    profissao?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    origem?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    pacienteId?: IntFilter<"Evento"> | number
    titulo?: StringFilter<"Evento"> | string
    data?: DateTimeFilter<"Evento"> | Date | string
    horarioInicio?: DateTimeFilter<"Evento"> | Date | string
    horarioFim?: DateTimeFilter<"Evento"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    pacienteId?: IntFilter<"Evento"> | number
    titulo?: StringFilter<"Evento"> | string
    data?: DateTimeFilter<"Evento"> | Date | string
    horarioInicio?: DateTimeFilter<"Evento"> | Date | string
    horarioFim?: DateTimeFilter<"Evento"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    pacienteId?: IntWithAggregatesFilter<"Evento"> | number
    titulo?: StringWithAggregatesFilter<"Evento"> | string
    data?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    horarioInicio?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    horarioFim?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
  }

  export type EvolucaoWhereInput = {
    AND?: EvolucaoWhereInput | EvolucaoWhereInput[]
    OR?: EvolucaoWhereInput[]
    NOT?: EvolucaoWhereInput | EvolucaoWhereInput[]
    id?: IntFilter<"Evolucao"> | number
    pacienteId?: IntFilter<"Evolucao"> | number
    titulo?: StringFilter<"Evolucao"> | string
    data?: DateTimeFilter<"Evolucao"> | Date | string
    horarioInicio?: DateTimeFilter<"Evolucao"> | Date | string
    horarioFim?: DateTimeFilter<"Evolucao"> | Date | string
    descricao?: StringFilter<"Evolucao"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type EvolucaoOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    descricao?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
  }

  export type EvolucaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvolucaoWhereInput | EvolucaoWhereInput[]
    OR?: EvolucaoWhereInput[]
    NOT?: EvolucaoWhereInput | EvolucaoWhereInput[]
    pacienteId?: IntFilter<"Evolucao"> | number
    titulo?: StringFilter<"Evolucao"> | string
    data?: DateTimeFilter<"Evolucao"> | Date | string
    horarioInicio?: DateTimeFilter<"Evolucao"> | Date | string
    horarioFim?: DateTimeFilter<"Evolucao"> | Date | string
    descricao?: StringFilter<"Evolucao"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "id">

  export type EvolucaoOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    descricao?: SortOrder
    _count?: EvolucaoCountOrderByAggregateInput
    _avg?: EvolucaoAvgOrderByAggregateInput
    _max?: EvolucaoMaxOrderByAggregateInput
    _min?: EvolucaoMinOrderByAggregateInput
    _sum?: EvolucaoSumOrderByAggregateInput
  }

  export type EvolucaoScalarWhereWithAggregatesInput = {
    AND?: EvolucaoScalarWhereWithAggregatesInput | EvolucaoScalarWhereWithAggregatesInput[]
    OR?: EvolucaoScalarWhereWithAggregatesInput[]
    NOT?: EvolucaoScalarWhereWithAggregatesInput | EvolucaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evolucao"> | number
    pacienteId?: IntWithAggregatesFilter<"Evolucao"> | number
    titulo?: StringWithAggregatesFilter<"Evolucao"> | string
    data?: DateTimeWithAggregatesFilter<"Evolucao"> | Date | string
    horarioInicio?: DateTimeWithAggregatesFilter<"Evolucao"> | Date | string
    horarioFim?: DateTimeWithAggregatesFilter<"Evolucao"> | Date | string
    descricao?: StringWithAggregatesFilter<"Evolucao"> | string
  }

  export type PacienteCreateInput = {
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
    eventos?: EventoCreateNestedManyWithoutPacienteInput
    evolucoes?: EvolucaoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
    eventos?: EventoUncheckedCreateNestedManyWithoutPacienteInput
    evolucoes?: EvolucaoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: EventoUpdateManyWithoutPacienteNestedInput
    evolucoes?: EvolucaoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: EventoUncheckedUpdateManyWithoutPacienteNestedInput
    evolucoes?: EvolucaoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
  }

  export type PacienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoCreateInput = {
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    paciente: PacienteCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    pacienteId: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
  }

  export type EventoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoCreateManyInput = {
    id?: number
    pacienteId: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
  }

  export type EventoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvolucaoCreateInput = {
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    descricao: string
    paciente: PacienteCreateNestedOneWithoutEvolucoesInput
  }

  export type EvolucaoUncheckedCreateInput = {
    id?: number
    pacienteId: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    descricao: string
  }

  export type EvolucaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutEvolucoesNestedInput
  }

  export type EvolucaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EvolucaoCreateManyInput = {
    id?: number
    pacienteId: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    descricao: string
  }

  export type EvolucaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EvolucaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
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
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type EvolucaoListRelationFilter = {
    every?: EvolucaoWhereInput
    some?: EvolucaoWhereInput
    none?: EvolucaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvolucaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    profissao?: SortOrder
    origem?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    profissao?: SortOrder
    origem?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    profissao?: SortOrder
    origem?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type EvolucaoCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    descricao?: SortOrder
  }

  export type EvolucaoAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type EvolucaoMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    descricao?: SortOrder
  }

  export type EvolucaoMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    descricao?: SortOrder
  }

  export type EvolucaoSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type EventoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<EventoCreateWithoutPacienteInput, EventoUncheckedCreateWithoutPacienteInput> | EventoCreateWithoutPacienteInput[] | EventoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutPacienteInput | EventoCreateOrConnectWithoutPacienteInput[]
    createMany?: EventoCreateManyPacienteInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type EvolucaoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<EvolucaoCreateWithoutPacienteInput, EvolucaoUncheckedCreateWithoutPacienteInput> | EvolucaoCreateWithoutPacienteInput[] | EvolucaoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EvolucaoCreateOrConnectWithoutPacienteInput | EvolucaoCreateOrConnectWithoutPacienteInput[]
    createMany?: EvolucaoCreateManyPacienteInputEnvelope
    connect?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<EventoCreateWithoutPacienteInput, EventoUncheckedCreateWithoutPacienteInput> | EventoCreateWithoutPacienteInput[] | EventoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutPacienteInput | EventoCreateOrConnectWithoutPacienteInput[]
    createMany?: EventoCreateManyPacienteInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type EvolucaoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<EvolucaoCreateWithoutPacienteInput, EvolucaoUncheckedCreateWithoutPacienteInput> | EvolucaoCreateWithoutPacienteInput[] | EvolucaoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EvolucaoCreateOrConnectWithoutPacienteInput | EvolucaoCreateOrConnectWithoutPacienteInput[]
    createMany?: EvolucaoCreateManyPacienteInputEnvelope
    connect?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<EventoCreateWithoutPacienteInput, EventoUncheckedCreateWithoutPacienteInput> | EventoCreateWithoutPacienteInput[] | EventoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutPacienteInput | EventoCreateOrConnectWithoutPacienteInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutPacienteInput | EventoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: EventoCreateManyPacienteInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutPacienteInput | EventoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutPacienteInput | EventoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type EvolucaoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<EvolucaoCreateWithoutPacienteInput, EvolucaoUncheckedCreateWithoutPacienteInput> | EvolucaoCreateWithoutPacienteInput[] | EvolucaoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EvolucaoCreateOrConnectWithoutPacienteInput | EvolucaoCreateOrConnectWithoutPacienteInput[]
    upsert?: EvolucaoUpsertWithWhereUniqueWithoutPacienteInput | EvolucaoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: EvolucaoCreateManyPacienteInputEnvelope
    set?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    disconnect?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    delete?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    connect?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    update?: EvolucaoUpdateWithWhereUniqueWithoutPacienteInput | EvolucaoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: EvolucaoUpdateManyWithWhereWithoutPacienteInput | EvolucaoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: EvolucaoScalarWhereInput | EvolucaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<EventoCreateWithoutPacienteInput, EventoUncheckedCreateWithoutPacienteInput> | EventoCreateWithoutPacienteInput[] | EventoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutPacienteInput | EventoCreateOrConnectWithoutPacienteInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutPacienteInput | EventoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: EventoCreateManyPacienteInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutPacienteInput | EventoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutPacienteInput | EventoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type EvolucaoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<EvolucaoCreateWithoutPacienteInput, EvolucaoUncheckedCreateWithoutPacienteInput> | EvolucaoCreateWithoutPacienteInput[] | EvolucaoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EvolucaoCreateOrConnectWithoutPacienteInput | EvolucaoCreateOrConnectWithoutPacienteInput[]
    upsert?: EvolucaoUpsertWithWhereUniqueWithoutPacienteInput | EvolucaoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: EvolucaoCreateManyPacienteInputEnvelope
    set?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    disconnect?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    delete?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    connect?: EvolucaoWhereUniqueInput | EvolucaoWhereUniqueInput[]
    update?: EvolucaoUpdateWithWhereUniqueWithoutPacienteInput | EvolucaoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: EvolucaoUpdateManyWithWhereWithoutPacienteInput | EvolucaoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: EvolucaoScalarWhereInput | EvolucaoScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutEventosInput = {
    create?: XOR<PacienteCreateWithoutEventosInput, PacienteUncheckedCreateWithoutEventosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEventosInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<PacienteCreateWithoutEventosInput, PacienteUncheckedCreateWithoutEventosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEventosInput
    upsert?: PacienteUpsertWithoutEventosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutEventosInput, PacienteUpdateWithoutEventosInput>, PacienteUncheckedUpdateWithoutEventosInput>
  }

  export type PacienteCreateNestedOneWithoutEvolucoesInput = {
    create?: XOR<PacienteCreateWithoutEvolucoesInput, PacienteUncheckedCreateWithoutEvolucoesInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEvolucoesInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutEvolucoesNestedInput = {
    create?: XOR<PacienteCreateWithoutEvolucoesInput, PacienteUncheckedCreateWithoutEvolucoesInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEvolucoesInput
    upsert?: PacienteUpsertWithoutEvolucoesInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutEvolucoesInput, PacienteUpdateWithoutEvolucoesInput>, PacienteUncheckedUpdateWithoutEvolucoesInput>
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
  }

  export type EventoCreateWithoutPacienteInput = {
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
  }

  export type EventoUncheckedCreateWithoutPacienteInput = {
    id?: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
  }

  export type EventoCreateOrConnectWithoutPacienteInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutPacienteInput, EventoUncheckedCreateWithoutPacienteInput>
  }

  export type EventoCreateManyPacienteInputEnvelope = {
    data: EventoCreateManyPacienteInput | EventoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type EvolucaoCreateWithoutPacienteInput = {
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    descricao: string
  }

  export type EvolucaoUncheckedCreateWithoutPacienteInput = {
    id?: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    descricao: string
  }

  export type EvolucaoCreateOrConnectWithoutPacienteInput = {
    where: EvolucaoWhereUniqueInput
    create: XOR<EvolucaoCreateWithoutPacienteInput, EvolucaoUncheckedCreateWithoutPacienteInput>
  }

  export type EvolucaoCreateManyPacienteInputEnvelope = {
    data: EvolucaoCreateManyPacienteInput | EvolucaoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type EventoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutPacienteInput, EventoUncheckedUpdateWithoutPacienteInput>
    create: XOR<EventoCreateWithoutPacienteInput, EventoUncheckedCreateWithoutPacienteInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutPacienteInput, EventoUncheckedUpdateWithoutPacienteInput>
  }

  export type EventoUpdateManyWithWhereWithoutPacienteInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    id?: IntFilter<"Evento"> | number
    pacienteId?: IntFilter<"Evento"> | number
    titulo?: StringFilter<"Evento"> | string
    data?: DateTimeFilter<"Evento"> | Date | string
    horarioInicio?: DateTimeFilter<"Evento"> | Date | string
    horarioFim?: DateTimeFilter<"Evento"> | Date | string
  }

  export type EvolucaoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: EvolucaoWhereUniqueInput
    update: XOR<EvolucaoUpdateWithoutPacienteInput, EvolucaoUncheckedUpdateWithoutPacienteInput>
    create: XOR<EvolucaoCreateWithoutPacienteInput, EvolucaoUncheckedCreateWithoutPacienteInput>
  }

  export type EvolucaoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: EvolucaoWhereUniqueInput
    data: XOR<EvolucaoUpdateWithoutPacienteInput, EvolucaoUncheckedUpdateWithoutPacienteInput>
  }

  export type EvolucaoUpdateManyWithWhereWithoutPacienteInput = {
    where: EvolucaoScalarWhereInput
    data: XOR<EvolucaoUpdateManyMutationInput, EvolucaoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type EvolucaoScalarWhereInput = {
    AND?: EvolucaoScalarWhereInput | EvolucaoScalarWhereInput[]
    OR?: EvolucaoScalarWhereInput[]
    NOT?: EvolucaoScalarWhereInput | EvolucaoScalarWhereInput[]
    id?: IntFilter<"Evolucao"> | number
    pacienteId?: IntFilter<"Evolucao"> | number
    titulo?: StringFilter<"Evolucao"> | string
    data?: DateTimeFilter<"Evolucao"> | Date | string
    horarioInicio?: DateTimeFilter<"Evolucao"> | Date | string
    horarioFim?: DateTimeFilter<"Evolucao"> | Date | string
    descricao?: StringFilter<"Evolucao"> | string
  }

  export type PacienteCreateWithoutEventosInput = {
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
    evolucoes?: EvolucaoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutEventosInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
    evolucoes?: EvolucaoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutEventosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutEventosInput, PacienteUncheckedCreateWithoutEventosInput>
  }

  export type PacienteUpsertWithoutEventosInput = {
    update: XOR<PacienteUpdateWithoutEventosInput, PacienteUncheckedUpdateWithoutEventosInput>
    create: XOR<PacienteCreateWithoutEventosInput, PacienteUncheckedCreateWithoutEventosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutEventosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutEventosInput, PacienteUncheckedUpdateWithoutEventosInput>
  }

  export type PacienteUpdateWithoutEventosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    evolucoes?: EvolucaoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutEventosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    evolucoes?: EvolucaoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateWithoutEvolucoesInput = {
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
    eventos?: EventoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutEvolucoesInput = {
    id?: number
    nome: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    cpf?: string | null
    endereco?: string | null
    profissao?: string | null
    origem?: string | null
    eventos?: EventoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutEvolucoesInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutEvolucoesInput, PacienteUncheckedCreateWithoutEvolucoesInput>
  }

  export type PacienteUpsertWithoutEvolucoesInput = {
    update: XOR<PacienteUpdateWithoutEvolucoesInput, PacienteUncheckedUpdateWithoutEvolucoesInput>
    create: XOR<PacienteCreateWithoutEvolucoesInput, PacienteUncheckedCreateWithoutEvolucoesInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutEvolucoesInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutEvolucoesInput, PacienteUncheckedUpdateWithoutEvolucoesInput>
  }

  export type PacienteUpdateWithoutEvolucoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: EventoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutEvolucoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: EventoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type EventoCreateManyPacienteInput = {
    id?: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
  }

  export type EvolucaoCreateManyPacienteInput = {
    id?: number
    titulo: string
    data: Date | string
    horarioInicio: Date | string
    horarioFim: Date | string
    descricao: string
  }

  export type EventoUpdateWithoutPacienteInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvolucaoUpdateWithoutPacienteInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EvolucaoUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EvolucaoUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioFim?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
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