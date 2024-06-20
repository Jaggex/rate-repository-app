import React from 'react';
import { useNavigate } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';
import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { createReview: { repositoryId } } = await createReview(values);
      navigate(`/repository/${repositoryId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;