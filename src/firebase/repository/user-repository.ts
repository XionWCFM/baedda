import {
  collection,
  getDoc,
  addDoc,
  doc,
  getFirestore,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {
  UserSchemaAddDocIdType,
  UserSchemaType,
} from '@/src/schema/user.schema';

export class UserRepository {
  private db;
  private collectionRef;
  constructor() {
    this.db = getFirestore();
    this.collectionRef = collection(this.db, 'user');
  }

  async createUser(user: UserSchemaType): Promise<UserSchemaAddDocIdType> {
    const docRef = await addDoc(this.collectionRef, user);
    return { docId: docRef.id, ...user };
  }

  async getUser(
    userId: UserSchemaType['userId'],
  ): Promise<UserSchemaAddDocIdType> {
    const docRef = doc(this.db, 'user', userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error('user not found');
    return { docId: docSnap.id, ...docSnap.data() } as UserSchemaAddDocIdType;
  }

  async updateUser(
    userId: UserSchemaType['userId'],
    userData: Partial<UserSchemaType>,
  ) {
    const docRef = doc(this.db, 'user', userId);
    await updateDoc(docRef, userData);
  }

  async deleteUser(userId: UserSchemaType['userId']) {
    const docRef = doc(this.db, 'user', userId);
    await deleteDoc(docRef);
  }
}
