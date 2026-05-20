import type { User as AppUser } from "./User.ts";

declare global {
  namespace Express {
    interface User extends AppUser {}
  }
}

export {};
