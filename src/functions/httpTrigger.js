const { app } = require("@azure/functions");

app.http("httpTrigger", {
    methods: ["GET"],
    authLevel: "anonymous",

    handler: async (request, context) => {
        return {
            status: 200,
            body: "Hello from Azure Function App!"
        };
    }
});