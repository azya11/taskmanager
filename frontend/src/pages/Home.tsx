import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiService.getUsers();
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to Universal Template</h1>
        <p>This is a basic full-stack template with React frontend and TypeScript backend.</p>
        
        <section className="users-section">
          <h2>Sample Users</h2>
          <div className="users-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;