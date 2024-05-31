// eslint-disable-next-line
import { Knex } from 'knex'

declare modeule 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id: string
    }
  }
}npm run devicePixelRatio