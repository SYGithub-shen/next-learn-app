import React from 'react';

interface Props {
  params: {
    id: number;
    photosId: number;
  }
}

const PhotoPage = ({params: {photosId, id}}: Props) => {
  return (
    <div>
      PhotoPage {id} {photosId}
    </div>
  );
};

export default PhotoPage;