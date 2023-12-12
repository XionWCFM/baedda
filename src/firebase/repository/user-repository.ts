import {
  collection,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  where,
  query,
  getDocs,
} from 'firebase/firestore';
import { UserSchemaType } from '@/src/schema/user.schema';
import { fireStore } from '../firebase';

export class UserRepository {
  private db;
  private collectionRef;
  constructor() {
    this.db = fireStore;
    this.collectionRef = collection(this.db, 'user');
  }

  async createUser(user: UserSchemaType): Promise<UserSchemaType> {
    const docRef = await addDoc(this.collectionRef, user);
    return { ...user, docId: docRef.id };
  }

  async getUserByDocId(
    docId: UserSchemaType['docId'],
  ): Promise<UserSchemaType> {
    const docRef = doc(this.db, 'user', docId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error('user not found');
    return { ...docSnap.data(), docId: docSnap.id } as UserSchemaType;
  }

  async getUserByProperty(
    property: keyof UserSchemaType,
    userId: UserSchemaType['userId'],
  ): Promise<UserSchemaType> {
    const userQuery = query(this.collectionRef, where(property, '==', userId));
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) throw new Error('user not found');
    const result = querySnapshot.docs[0].data();
    return { ...result, docId: querySnapshot.docs[0].id } as UserSchemaType;
  }

  async updateUser(
    docId: UserSchemaType['docId'],
    userData: Partial<UserSchemaType>,
  ) {
    const docRef = doc(this.db, 'user', docId);
    await updateDoc(docRef, userData);
  }

  async deleteUser(docId: UserSchemaType['docId']) {
    const docRef = doc(this.db, 'user', docId);
    await deleteDoc(docRef);
  }
}
