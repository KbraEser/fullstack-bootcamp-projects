import React from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { notlariAlAPI } from '../store/actions';

const PostList = () => {
  const notlar = useSelector((state) => state.notlar);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notlariAlAPI());
  }, [dispatch]);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
