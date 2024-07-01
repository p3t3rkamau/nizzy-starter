// pages/api/profile.js

import { getSession } from 'next-auth/react';
import { db } from '@/lib/db';
// @ts-ignore
export default async function handler(req, res) {
    // @ts-ignore
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const user = await db.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Modify the response to include only necessary user data
    const userProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
      // Add more fields as needed
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
