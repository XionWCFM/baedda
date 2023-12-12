'use client';
import React from 'react';
import { UserRepository } from '../firebase/repository/user-repository';

interface exampleProps {}

const Example = ({}: exampleProps) => {
  return (
    <div>
      <button
        onClick={() => {
          (async () => {
            const userRepo = new UserRepository();
            await userRepo.createUser({
              docId: '',
              userId: 'hi',
              userGender: 'man',
              userAllias: [],
              password: 'sdaf',
              userNickName: 'umjoonsick',
            });
            console.log(userRepo);
          })();
        }}
      >
        안냐쌔염
      </button>

      <button
        onClick={() => {
          const userRepo = new UserRepository();
          const result = userRepo
            .getUserByDocId('a20q01FjNlNjfnBiwWXe')
            .then(console.log);
        }}
      >
        누르면 겟유저
      </button>
    </div>
  );
};

export default Example;
