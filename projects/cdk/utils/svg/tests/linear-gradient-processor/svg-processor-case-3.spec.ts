import {tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

const ACTUAL = `
<svg height="64px" viewBox="0 0 64 64" width="64px" xmlns="http://www.w3.org/2000/svg">
    <linearGradient
        gradientUnits="userSpaceOnUse"
        data-id='r4wzZI4nTYpRSYqL7WQ95a'
        id="r4wzZI4nTYpRSYqL7WQ95a"
        spreadMethod="reflect"
        x1="37"
        x2="37"
        y1="14.5"
        y2="19.332"
    >
        <stop offset="0" stop-color="currentColor" />
        <stop offset="1" stop-color="currentColor" />
    </linearGradient>
    <path d="M37 14.854A2 2 0 1 0 37 18.854A2 2 0 1 0 37 14.854Z" fill='url("#r4wzZI4nTYpRSYqL7WQ95a")' />
    <linearGradient
        gradientUnits="userSpaceOnUse"
        id="r4wzZI4nTYpRSYqL7WQ95b"
        spreadMethod="reflect"
        x1="27"
        x2="27"
        y1="14.5"
        y2="19.332"
    >
        <stop offset="0" stop-color="currentColor" />
        <stop offset="1" stop-color="currentColor" />
    </linearGradient>
    <path d="M27 14.854A2 2 0 1 0 27 18.854A2 2 0 1 0 27 14.854Z" fill="url('#r4wzZI4nTYpRSYqL7WQ95b')" />
    <linearGradient
        gradientUnits="userSpaceOnUse"
        id="r4wzZI4nTYpRSYqL7WQ95c"
        spreadMethod="reflect"
        x1="32"
        x2="32"
        y1="5.25"
        y2="59.232"
    >
        <stop offset="0" stop-color="currentColor" />
        <stop offset="1" stop-color="currentColor" />
    </linearGradient>
    <path
        d="M49,22h-2h-0.049c-0.284-4.495-2.458-8.387-5.765-10.919l3.521-3.521l-1.414-1.414 l-3.807,3.807C37.293,8.713,34.747,8,32,8s-5.294,0.713-7.486,1.953l-3.807-3.807l-1.414,1.414l3.521,3.521 c-3.307,2.532-5.48,6.424-5.765,10.919H17h-2c-2.243,0-4,1.692-4,3.854v13c0,2.206,1.794,4,4,4c0.732,0,1-0.212,2-0.556v1.556 c0,2.438,2,4.545,4,5.038v4.962c0,2.206,1.794,4,4,4s4-1.794,4-4V49h6v4.854c0,2.206,1.794,4,4,4s4-1.794,4-4v-4.962 c2-0.492,4-2.599,4-5.038v-1.556c1,0.344,1.268,0.556,2,0.556c2.206,0,4-1.794,4-4v-13C53,23.692,51.243,22,49,22z M32,10 c6.953,0,12.469,5.194,12.964,12H19.036C19.531,15.194,25.047,10,32,10z M15,40.854c-1.103,0-2-0.897-2-2v-13 C13,24.797,13.859,24,15,24h2v14.854C17,39.956,16.103,40.854,15,40.854z M27,53.854c0,1.103-0.897,2-2,2s-2-0.897-2-2V49h4V53.854z M39,55.854c-1.103,0-2-0.897-2-2V49h4v4.854C41,54.956,40.103,55.854,39,55.854z M45,43.854C45,45.56,43.626,47,42,47H22 c-1.626,0-3-1.44-3-3.146v-5V24h26v14.854V43.854z M51,38.854c0,1.103-0.897,2-2,2s-2-0.897-2-2V24h2c1.141,0,2,0.797,2,1.854 V38.854z"
        fill="url(#r4wzZI4nTYpRSYqL7WQ95c)"
    />
</svg>
`;

const EXPECTED = `
<svg height="64px" viewBox="0 0 64 64" width="64px" xmlns="http://www.w3.org/2000/svg">
    <linearGradient gradientUnits="userSpaceOnUse" data-id="id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95a" id="id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95a" spreadMethod="reflect" x1="37" x2="37" y1="14.5" y2="19.332">
        <stop offset="0" stop-color="currentColor"></stop>
        <stop offset="1" stop-color="currentColor"></stop>
    </linearGradient>
    <path d="M37 14.854A2 2 0 1 0 37 18.854A2 2 0 1 0 37 14.854Z" fill="url(&quot;#id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95a&quot;) rgba(0, 0, 0, 0.7)"></path>
    <linearGradient gradientUnits="userSpaceOnUse" id="id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95b" spreadMethod="reflect" x1="27" x2="27" y1="14.5" y2="19.332">
        <stop offset="0" stop-color="currentColor"></stop>
        <stop offset="1" stop-color="currentColor"></stop>
    </linearGradient>
    <path d="M27 14.854A2 2 0 1 0 27 18.854A2 2 0 1 0 27 14.854Z" fill="url('#id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95b') rgba(0, 0, 0, 0.7)"></path>
    <linearGradient gradientUnits="userSpaceOnUse" id="id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95c" spreadMethod="reflect" x1="32" x2="32" y1="5.25" y2="59.232">
        <stop offset="0" stop-color="currentColor"></stop>
        <stop offset="1" stop-color="currentColor"></stop>
    </linearGradient>
    <path d="M49,22h-2h-0.049c-0.284-4.495-2.458-8.387-5.765-10.919l3.521-3.521l-1.414-1.414 l-3.807,3.807C37.293,8.713,34.747,8,32,8s-5.294,0.713-7.486,1.953l-3.807-3.807l-1.414,1.414l3.521,3.521 c-3.307,2.532-5.48,6.424-5.765,10.919H17h-2c-2.243,0-4,1.692-4,3.854v13c0,2.206,1.794,4,4,4c0.732,0,1-0.212,2-0.556v1.556 c0,2.438,2,4.545,4,5.038v4.962c0,2.206,1.794,4,4,4s4-1.794,4-4V49h6v4.854c0,2.206,1.794,4,4,4s4-1.794,4-4v-4.962 c2-0.492,4-2.599,4-5.038v-1.556c1,0.344,1.268,0.556,2,0.556c2.206,0,4-1.794,4-4v-13C53,23.692,51.243,22,49,22z M32,10 c6.953,0,12.469,5.194,12.964,12H19.036C19.531,15.194,25.047,10,32,10z M15,40.854c-1.103,0-2-0.897-2-2v-13 C13,24.797,13.859,24,15,24h2v14.854C17,39.956,16.103,40.854,15,40.854z M27,53.854c0,1.103-0.897,2-2,2s-2-0.897-2-2V49h4V53.854z M39,55.854c-1.103,0-2-0.897-2-2V49h4v4.854C41,54.956,40.103,55.854,39,55.854z M45,43.854C45,45.56,43.626,47,42,47H22 c-1.626,0-3-1.44-3-3.146v-5V24h26v14.854V43.854z M51,38.854c0,1.103-0.897,2-2,2s-2-0.897-2-2V24h2c1.141,0,2,0.797,2,1.854 V38.854z" fill="url(#id_MOCK_ID_r4wzZI4nTYpRSYqL7WQ95c) rgba(0, 0, 0, 0.7)"></path>
</svg>
`.trim();

describe(`svgLinearGradientProcessor[case3]`, () => {
    it(`correct replacing ids`, () => {
        expect(tuiSvgLinearGradientProcessor(ACTUAL, `MOCK_ID`)).toEqual(EXPECTED);
    });
});
