import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const ExerciseDetail = () => {
  const { id } = useParams();

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      {/*<Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />*/}
    </Box>
  )
}

export default ExerciseDetail