import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Mock Payment Routes (Paystack, Stripe, etc.)
  app.post("/api/payments/initialize", (req, res) => {
    const { amount, currency, email, metadata } = req.body;
    // In a real app, you'd call the Paystack/Stripe API here
    console.log(`Initializing payment of ${amount} ${currency} for ${email}`);
    
    // Simulate a successful initialization response
    res.json({
      status: true,
      message: "Authorization URL created",
      data: {
        authorization_url: "https://checkout.stackston.com/mock-pay",
        access_code: "MOCK_" + Math.random().toString(36).substring(7),
        reference: "REF_" + Date.now(),
      }
    });
  });

  app.post("/api/payments/verify", (req, res) => {
    const { reference } = req.body;
    // Verify with third party
    res.json({
      status: true,
      message: "Verification successful",
      data: {
        status: "success",
        reference,
        amount: 5000,
      }
    });
  });

  // Wholesale Quote API
  app.post("/api/wholesale/quote", (req, res) => {
    const inquiry = req.body;
    console.log("Wholesale Inquiry received:", inquiry);
    res.json({
      status: "success",
      message: "Quote request received. Our team will contact you within 24 hours."
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Stackston Server running on http://localhost:${PORT}`);
  });
}

startServer();
