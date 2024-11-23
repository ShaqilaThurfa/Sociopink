declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_BASE_URL: string;
      JWT_SECRET: string;
      MONGO_URI: string;
    }
  }
}

export {};