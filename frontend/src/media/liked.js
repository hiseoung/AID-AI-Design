import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="#04AA8C" stroke="#04AA8C" stroke-width="2"/>
<path d="M64.0011 32.9779L64.0023 32.9789C65.1278 33.9715 65.6883 35.556 65.4433 37.1133L65.4431 37.1142L63.7176 48.2202L63.7165 48.2276L63.7155 48.235C63.5248 49.761 62.8668 50.9073 61.8455 51.6241C61.0399 52.1827 59.9604 52.5 58.6992 52.5L50.0154 52.4997H45.333C44.217 52.4997 43.1767 52.0294 42.4054 51.2482L42.0723 50.9107L41.7177 51.2256C41.414 51.4952 41.0088 51.6597 40.5759 51.6597H36.3039C35.3277 51.6597 34.5 50.8282 34.5 49.7744V35.327C34.5 34.2732 35.3277 33.4417 36.3038 33.4416C36.3038 33.4416 36.3039 33.4416 36.3039 33.4416L40.5573 33.442H40.5573C41.0935 33.442 41.5725 33.6809 41.9024 34.0678L42.1055 34.306L42.4085 34.2273L42.5204 34.1983L42.5305 34.1957L42.5404 34.1927C42.7281 34.1355 44.0097 33.7091 45.2672 32.7733C46.9502 31.5254 47.8381 29.9268 47.8381 28.0262V22.3768C47.8381 22.0859 48.0207 21.8374 48.2762 21.7513C48.3407 21.731 48.9951 21.5292 49.8612 21.5028C50.7491 21.4758 51.806 21.6341 52.688 22.3017C53.7968 23.1484 54.4121 24.6011 54.4121 26.7516V31.4354V31.9354H54.9121H61.3203C62.2842 31.9354 63.2401 32.3026 64.0011 32.9779ZM42.2829 33.7434C41.8631 33.251 41.2476 32.942 40.5573 32.942L44.969 32.3719C43.7752 33.2605 42.5533 33.6661 42.3948 33.7143L42.2829 33.7434ZM64.2212 36.9107L64.2216 36.908C64.3843 35.8196 64.0197 34.6996 63.2108 33.9792L63.2109 33.9791L63.205 33.9741C62.6773 33.5186 62.0138 33.244 61.3207 33.244H56.6478H56.6478L53.7934 33.2437H53.7933C53.4702 33.2437 53.1742 32.9626 53.1742 32.5849L53.1739 26.7424C53.1739 25.2412 52.8338 24.0292 51.9698 23.3705L51.9684 23.3695C51.1863 22.7774 50.1737 22.7651 49.5228 22.8365L49.0774 22.8854V23.3335V28.0268C49.0774 30.3426 48.0015 32.3724 45.9233 33.9013L45.9219 33.9024C44.5303 34.9339 43.1275 35.3912 42.8862 35.4654H42.8735L42.8042 35.4858L42.739 35.5051L42.3805 35.6109V35.9846V48.4038V48.4643L42.3949 48.523C42.4001 48.5442 42.4056 48.5724 42.4145 48.6177L42.4159 48.625C42.642 50.0763 43.8824 51.1925 45.3337 51.1925H58.6995C60.3141 51.1925 61.2801 50.6363 61.8333 49.9003C62.3406 49.2253 62.4427 48.4695 62.4837 48.1097C62.4937 48.0691 62.4982 48.0335 62.5001 48.0069L64.2212 36.9107ZM42.8043 35.4884C42.8029 35.4889 42.8033 35.4887 42.8049 35.4882L42.8043 35.4884ZM40.5763 50.3421C40.9059 50.3421 41.1415 50.0727 41.1415 49.7745V35.3271C41.1415 35.029 40.9059 34.7596 40.5763 34.7596H36.3043C35.9747 34.7596 35.739 35.029 35.739 35.3271V49.7745C35.739 50.0727 35.9747 50.3421 36.3043 50.3421H40.5763Z" fill="white" stroke="white"/>
<path d="M29.4266 77H38.5126V75.262H31.4726V60.852H29.4266V77ZM41.3719 77H43.4179V60.852H41.3719V77ZM47.8172 77H49.8632V71.896L52.6352 68.596L57.4752 77H59.7412L53.9112 67.012L58.9492 60.852H56.6612L49.9292 68.97H49.8632V60.852H47.8172V77ZM62.0398 77H71.5878V75.262H64.0858V69.388H70.2018V67.65H64.0858V62.59H71.3458V60.852H62.0398V77Z" fill="white"/>
</svg>
`;

const Liked = () => {
    const Liked = () => <SvgXml xml={svg} width="50" height="50" />;
    return <Liked />;
};

export default Liked;