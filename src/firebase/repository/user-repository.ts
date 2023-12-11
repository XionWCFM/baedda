import { collection, getDoc, addDoc, doc } from 'firebase/firestore';
import { fireStore } from '../firebase';

export class UserRepository {
  private getCollection() {
    return collection(fireStore, 'user');
  }
  async createUser() {
    const userCollection = this.getCollection();
    await addDoc(userCollection, {
      userName: 'heloworld',
    });
  }
  async getUserByUserId() {
    const userCollection = doc(fireStore, 'user');
    const docRef = await getDoc(userCollection);
    if (!docRef.exists()) {
      throw new Error('repository error');
    }
    const userData = docRef.data();
    return userData;
  }
}
