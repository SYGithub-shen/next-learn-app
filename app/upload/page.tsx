'use client';
import React, {useState} from 'react';
import {CldUploadWidget, CldImage} from "next-cloudinary";

interface CldUploadResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')

  return (
    <>
      {publicId && <CldImage src={publicId} width={300} height={300} alt=''/>}
      <CldUploadWidget
        uploadPreset='lwtsq96z'
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#FFFFFF",
              windowBorder: "#90A0B3",
              tabIcon: "#0078FF",
              menuIcons: "#5A616A",
              textDark: "#000000",
              textLight: "#FFFFFF",
              link: "#0078FF",
              action: "#FF620C",
              inactiveTabIcon: "#0E2F5A",
              error: "#F44235",
              inProgress: "#0078FF",
              complete: "#20B832",
              sourceBg: "#E4EBF1"
            },
            fonts: {
              default: null,
              "'Fira Sans', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                active: true
              }
            }
          }
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return
          const resultInfo = result.info as CldUploadResult
          setPublicId(resultInfo.public_id)
        }}
      >
        {({open}) => <button className={'btn btn-primary'} onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
    </>

  );
};

export default UploadPage;
