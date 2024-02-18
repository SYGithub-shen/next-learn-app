import React, {CSSProperties} from 'react';
import {Html, Body, Preview, Text, Link, Container, Tailwind} from '@react-email/components'

const WelcomeTemplate = ({name}: {name?:string}) => {
  return (
    <Html>
      <Preview>Welcome Template</Preview>
      <Tailwind>
        <Body className={'bg-white'}>
          <Container>
            <Text className={'font-bold text-3xl'}>Welcome to nextjs {name}</Text>
            <Link href="https://www.baidu.com">www.baidu.com</Link>
          </Container>
        </Body>
      </Tailwind>

    </Html>
  );
};
const body:CSSProperties = {
  background: '#fff',
}
const heading:CSSProperties = {
  fontSize: '32px'
}
export default WelcomeTemplate;
