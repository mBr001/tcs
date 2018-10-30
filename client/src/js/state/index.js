const state = {
    system_info: {
        tcs_ver: 'N/A',
        firmware_ver: 'N/A',
        wifi_dongle: 'N/A',
        video_devices: [],
    },

    showSplashScreen: true,
    mode: 'drive',
    manipulator: {
        axis1: {
            min: 2800,
            max: 4850,
            step: 10,
            value: 3300,
        },
        axis2: {
            min: 2700,
            max: 4450,
            step: 10,
            value: 3300,
        },
        gripper: {
            min: 2400,
            max: 3600,
            step: 10,
            value: 3300,
        },
    },

    settings: {
        isVisible: false,
        category: 'manipulator',
    },
    telemetry: {
        batteryLevel: 0,
        signalLevel: 0,
        temperature: '',
    },

    default: {},
    preprogram: {
        blocks: [{
            direction: 'fw',
            speed: 70,
            time: 3,
        },
        {
            direction: 'l',
            speed: 20,
            time: 15,
        }],
        next: {
            direction: 'fw',
            speed: 0,
            time: 0,
            step: 1,
        },
    },
};

export default state;
