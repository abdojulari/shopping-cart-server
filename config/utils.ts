export type SequelizeConfig = {
    development: {
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
        host: string | undefined;
        dialect: string;
        dialectOptions: {
            bigNumberStrings: boolean;
        };
    };
    test: {
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
        host: string | undefined;
        dialect: string;
        dialectOptions: {
            bigNumberStrings: boolean;
        };
      
    };
    
  };
  