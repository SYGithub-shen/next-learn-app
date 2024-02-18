import React from 'react';
import Script from "next/script";

const GoogleAnalyticsScript = () => {
	return (
		<>
			<Script async src={'https://www.googletagmanager.com/gtag/js?id?id=G-E720JHXSJ2'} />
			<Script strategy={'beforeInteractive'} id={'micromanagement'}>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E720JHXSJ2');
        `}
			</Script>
		</>
	);
};

export default GoogleAnalyticsScript;