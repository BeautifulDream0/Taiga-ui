import {tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

const ACTUAL = `
<svg height="48" viewBox="0 0 512 512" width="48" xmlns="http://www.w3.org/2000/svg">
    <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

    <g>
        <title>background</title>
        <rect fill="none" height="514" id="canvas_background" width="514" x="-1" y="-1" />
        <g display="none" id="canvasGrid">
            <rect fill="url(#gridpattern)" height="100%" id="svg_1" stroke-width="0" width="100%" x="0" y="0" />
        </g>
    </g>
    <g>
        <title>Layer 1</title>
        <style type="text/css">
            .st0 {
                fill: #2190e4;
            }

            .st1 {
                fill: #1d85d4;
            }

            .st2 {
                fill: #ffffff;
            }
        </style>
        <g id="svg_8" stroke="null">
            <g
                id="svg_5"
                stroke="null"
                transform="matrix(2.5122204305161695,0,0,2.5122204305161695,-1123.5039578168125,-1123.4669114951682) "
            >
                <polygon
                    class="st0"
                    id="svg_6"
                    points="549.31640625,448.91835513710976 549.31640625,448.91835513710976 549.31640625,448.91835513710976 456.2164001464844,482.118367344141 470.4164123535156,605.2183429300785 549.31640625,648.9183551371098 549.31640625,648.9183551371098 549.31640625,648.9183551371098 628.2164306640625,605.2183429300785 642.4164428710938,482.118367344141 "
                    stroke="null"
                />
                <polygon
                    class="st1"
                    id="svg_7"
                    points="549.31640625,448.91835513710976 549.31640625,471.118367344141 549.31640625,471.0183612406254 549.31640625,572.3183795511723 549.31640625,572.3183795511723 549.31640625,648.9183551371098 549.31640625,648.9183551371098 628.2164306640625,605.2183429300785 642.4164428710938,482.118367344141 549.31640625,448.91835513710976 "
                    stroke="null"
                />
            </g>
        </g>
        <g id="svg_18" stroke="null">
            <path
                d="m257.249495,192.912241c-21.146608,0 -38.35198,17.205371 -38.35198,38.35198c0,21.148462 17.205372,38.353834 38.35198,38.353834c21.148462,0 38.353834,-17.205371 38.353834,-38.353834c0,-21.146609 -17.205372,-38.35198 -38.353834,-38.35198zm0,0"
                fill="#ffffff"
                id="svg_16"
                stroke="null"
            />
            <path
                d="m257.249495,145.793512c-49.104179,0 -89.052304,39.948125 -89.052304,89.052304c0,22.557371 14.213294,54.428371 42.246871,94.728723c20.490353,29.45917 40.643311,52.255685 41.492364,53.21226l5.313069,5.99157l5.314923,-5.99157c0.847199,-0.956575 21.000156,-23.75309 41.492364,-53.21226c28.031723,-40.300353 42.246871,-72.171352 42.246871,-94.728723c0,-49.104179 -39.949979,-89.052304 -89.054158,-89.052304zm0,138.030422c-28.980883,0 -52.557858,-23.57883 -52.557858,-52.559713s23.576976,-52.557859 52.557858,-52.557859c28.982737,0 52.559713,23.576976 52.559713,52.557859s-23.576976,52.559713 -52.559713,52.559713zm0,0"
                fill="#ffffff"
                id="svg_17"
                stroke="null"
            />
        </g>
    </g>
</svg>
`;

const EXPECTED = `
<svg height="48" viewBox="0 0 512 512" width="48" xmlns="http://www.w3.org/2000/svg">
    <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

    <g>
        <title>background</title>
        <rect fill="none" height="514" id="canvas_background" width="514" x="-1" y="-1"></rect>
        <g display="none" id="canvasGrid">
            <rect fill="url(#id_MOCK_ID_gridpattern) rgba(0, 0, 0, 0.7)" height="100%" id="svg_1" stroke-width="0" width="100%" x="0" y="0"></rect>
        </g>
    </g>
    <g>
        <title>Layer 1</title>
        <style type="text/css">
            .st0 {
                fill: #2190e4;
            }

            .st1 {
                fill: #1d85d4;
            }

            .st2 {
                fill: #ffffff;
            }
        </style>
        <g id="svg_8" stroke="null">
            <g id="svg_5" stroke="null" transform="matrix(2.5122204305161695,0,0,2.5122204305161695,-1123.5039578168125,-1123.4669114951682) ">
                <polygon class="st0" id="svg_6" points="549.31640625,448.91835513710976 549.31640625,448.91835513710976 549.31640625,448.91835513710976 456.2164001464844,482.118367344141 470.4164123535156,605.2183429300785 549.31640625,648.9183551371098 549.31640625,648.9183551371098 549.31640625,648.9183551371098 628.2164306640625,605.2183429300785 642.4164428710938,482.118367344141 " stroke="null"></polygon>
                <polygon class="st1" id="svg_7" points="549.31640625,448.91835513710976 549.31640625,471.118367344141 549.31640625,471.0183612406254 549.31640625,572.3183795511723 549.31640625,572.3183795511723 549.31640625,648.9183551371098 549.31640625,648.9183551371098 628.2164306640625,605.2183429300785 642.4164428710938,482.118367344141 549.31640625,448.91835513710976 " stroke="null"></polygon>
            </g>
        </g>
        <g id="svg_18" stroke="null">
            <path d="m257.249495,192.912241c-21.146608,0 -38.35198,17.205371 -38.35198,38.35198c0,21.148462 17.205372,38.353834 38.35198,38.353834c21.148462,0 38.353834,-17.205371 38.353834,-38.353834c0,-21.146609 -17.205372,-38.35198 -38.353834,-38.35198zm0,0" fill="#ffffff" id="svg_16" stroke="null"></path>
            <path d="m257.249495,145.793512c-49.104179,0 -89.052304,39.948125 -89.052304,89.052304c0,22.557371 14.213294,54.428371 42.246871,94.728723c20.490353,29.45917 40.643311,52.255685 41.492364,53.21226l5.313069,5.99157l5.314923,-5.99157c0.847199,-0.956575 21.000156,-23.75309 41.492364,-53.21226c28.031723,-40.300353 42.246871,-72.171352 42.246871,-94.728723c0,-49.104179 -39.949979,-89.052304 -89.054158,-89.052304zm0,138.030422c-28.980883,0 -52.557858,-23.57883 -52.557858,-52.559713s23.576976,-52.557859 52.557858,-52.557859c28.982737,0 52.559713,23.576976 52.559713,52.557859s-23.576976,52.559713 -52.559713,52.559713zm0,0" fill="#ffffff" id="svg_17" stroke="null"></path>
        </g>
    </g>
</svg>
`.trim();

describe(`svgLinearGradientProcessor[case2]`, () => {
    it(`ignore hex color`, () => {
        expect(tuiSvgLinearGradientProcessor(ACTUAL, `MOCK_ID`)).toEqual(EXPECTED);
    });
});
