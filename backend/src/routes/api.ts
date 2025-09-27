import { Router, Request, Response } from 'express';

const router = Router();

// Sample API routes
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API is working!',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

router.get('/users', (req: Request, res: Response) => {
  // Sample data - replace with actual database calls
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

router.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  
  // Basic validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  // Sample response - replace with actual database operations
  const newUser = {
    id: Date.now(),
    name,
    email,
    createdAt: new Date().toISOString()
  };
  
  res.status(201).json({
    success: true,
    data: newUser,
    message: 'User created successfully'
  });
});

export default router;