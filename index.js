require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.MD_USER}:${process.env.MD_PASS}@cluster0.cqqhz9d.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

    const productCollection = client.db("buildmyrig").collection("products");
    const categoriesCollection = client
      .db("buildmyrig")
      .collection("categories");
    const ramCollection = client.db("buildmyrig").collection("cat_ram");
    const processorCollection = client
      .db("buildmyrig")
      .collection("cat_processor");
    const powerSupplyCollection = client
      .db("buildmyrig")
      .collection("cat_powersupply");
    const othersCollection = client.db("buildmyrig").collection("cat_others");
    const motherboardCollection = client
      .db("buildmyrig")
      .collection("cat_motherboard");
    const monitorCollection = client.db("buildmyrig").collection("cat_monitor");

    app.get("/api/products", async (req, res) => {
      const products = await productCollection.find({}).toArray();
      if (!products) {
        res.status(404).json({
          status: "error",
          message: "Products not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All products found successfully",
          data: products,
        });
      }
    });

    app.get("/api/products/:id", async (req, res) => {
      const productId = req.params.id;

      const product = await productCollection.findOne({
        _id: new ObjectId(productId),
      });

      if (!product) {
        res.status(404).json({
          status: "error",
          message: "Product not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single product details found successfully",
          data: product,
        });
      }
    });

    app.get("/api/categories", async (req, res) => {
      const categories = await categoriesCollection.find({}).toArray();
      if (!categories) {
        res.status(404).json({
          status: "error",
          message: "Categories not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All categories found successfully",
          data: categories,
        });
      }
    });

    app.get("/api/cat_ram", async (req, res) => {
      const ram = await ramCollection.find({}).toArray();
      if (!ram) {
        res.status(404).json({
          status: "error",
          message: "Ram not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All ram found successfully",
          data: ram,
        });
      }
    });

    app.get("/api/cat_processor", async (req, res) => {
      const processor = await processorCollection.find({}).toArray();
      if (!processor) {
        res.status(404).json({
          status: "error",
          message: "Processor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All processor found successfully",
          data: processor,
        });
      }
    });

    app.get("/api/cat_powersupply", async (req, res) => {
      const powerSupply = await powerSupplyCollection.find({}).toArray();
      if (!powerSupply) {
        res.status(404).json({
          status: "error",
          message: "Power supply not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All power supply found successfully",
          data: powerSupply,
        });
      }
    });

    app.get("/api/cat_others", async (req, res) => {
      const others = await othersCollection.find({}).toArray();
      if (!others) {
        res.status(404).json({
          status: "error",
          message: "Others components not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All others components found successfully",
          data: others,
        });
      }
    });

    app.get("/api/cat_motherboard", async (req, res) => {
      const motherboard = await motherboardCollection.find({}).toArray();
      if (!motherboard) {
        res.status(404).json({
          status: "error",
          message: "Motherboard not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All motherboard found successfully",
          data: motherboard,
        });
      }
    });

    app.get("/api/cat_monitor", async (req, res) => {
      const monitor = await monitorCollection.find({}).toArray();
      if (!monitor) {
        res.status(404).json({
          status: "error",
          message: "Monitor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All monitor found successfully",
          data: monitor,
        });
      }
    });

    app.get("/api/cat_ram/:id", async (req, res) => {
      const ramId = req.params.id;

      const ram = await ramCollection.findOne({
        _id: new ObjectId(ramId),
      });

      if (!ram) {
        res.status(404).json({
          status: "error",
          message: "Ram not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single ram details found successfully",
          data: ram,
        });
      }
    });

    app.get("/api/cat_processor/:id", async (req, res) => {
      const processorId = req.params.id;

      const processor = await processorCollection.findOne({
        _id: new ObjectId(processorId),
      });

      if (!processor) {
        res.status(404).json({
          status: "error",
          message: "Processor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single processor details found successfully",
          data: processor,
        });
      }
    });

    app.get("/api/cat_monitor/:id", async (req, res) => {
      const monitorId = req.params.id;

      const monitor = await monitorCollection.findOne({
        _id: new ObjectId(monitorId),
      });

      if (!monitor) {
        res.status(404).json({
          status: "error",
          message: "Monitor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single monitor details found successfully",
          data: monitor,
        });
      }
    });

    app.get("/api/cat_powersupply/:id", async (req, res) => {
      const powersupplyId = req.params.id;

      const powersupply = await powerSupplyCollection.findOne({
        _id: new ObjectId(powersupplyId),
      });

      if (!powersupply) {
        res.status(404).json({
          status: "error",
          message: "Power supply not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single power supply details found successfully",
          data: powersupply,
        });
      }
    });

    app.get("/api/cat_others/:id", async (req, res) => {
      const othersId = req.params.id;

      const other = await othersCollection.findOne({
        _id: new ObjectId(othersId),
      });

      if (!other) {
        res.status(404).json({
          status: "error",
          message: "Other not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single other details found successfully",
          data: other,
        });
      }
    });

    app.get("/api/cat_motherboard/:id", async (req, res) => {
      const motherboardId = req.params.id;

      const motherboard = await motherboardCollection.findOne({
        _id: new ObjectId(motherboardId),
      });

      if (!motherboard) {
        res.status(404).json({
          status: "error",
          message: "Motherboard not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single motherboard details found successfully",
          data: motherboard,
        });
      }
    });

    app.get("/api/cat_monitor/:id", async (req, res) => {
      const monitorId = req.params.id;

      const monitor = await monitorCollection.findOne({
        _id: new ObjectId(monitorId),
      });

      if (!monitor) {
        res.status(404).json({
          status: "error",
          message: "Monitor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single monitor details found successfully",
          data: monitor,
        });
      }
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Build My Rig Server Working Perfectly");
});
