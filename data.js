var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9095346376195934,
          "pitch": 0.28519996067341324,
          "rotation": 0,
          "target": "1-karan-bedroom"
        },
        {
          "yaw": 2.066752710309351,
          "pitch": 0.20500416953186829,
          "rotation": 0,
          "target": "2-pari-bedroom"
        },
        {
          "yaw": 2.590629919944017,
          "pitch": 0.202069044408276,
          "rotation": 0,
          "target": "5-lobby-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-karan-bedroom",
      "name": "Karan Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9359276833559189,
          "pitch": 0.333079172325899,
          "rotation": 0,
          "target": "0-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pari-bedroom",
      "name": "Pari Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7784015310837278,
          "pitch": 0.24901617097604678,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": 1.6818424184125638,
          "pitch": 0.06536461128570714,
          "rotation": 0,
          "target": "1-karan-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-arjun-bedroom",
      "name": "Arjun Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1836988014621594,
          "pitch": 0.24279444003545336,
          "rotation": 0,
          "target": "5-lobby-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-guest-bedroom",
      "name": "Guest Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1638131138159302,
          "pitch": 0.15262674190106296,
          "rotation": 0,
          "target": "5-lobby-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lobby-02",
      "name": "Lobby 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6285435615379473,
          "pitch": 0.3833097321508685,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -2.535951466216247,
          "pitch": 0.22387036281449468,
          "rotation": 0,
          "target": "4-guest-bedroom"
        },
        {
          "yaw": 1.6388031467921955,
          "pitch": 0.408301411802217,
          "rotation": 0,
          "target": "3-arjun-bedroom"
        },
        {
          "yaw": -0.8338459714380413,
          "pitch": 0.23154829176656833,
          "rotation": 5.497787143782138,
          "target": "0-living-area"
        },
        {
          "yaw": -0.5241485266855541,
          "pitch": 0.2119687507408763,
          "rotation": 0.7853981633974483,
          "target": "2-pari-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.835382138123766,
          "pitch": 0.08637099089778388,
          "rotation": 0,
          "target": "4-guest-bedroom"
        },
        {
          "yaw": 3.033248066238622,
          "pitch": 0.3937787776775785,
          "rotation": 0,
          "target": "5-lobby-02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mrs.Umidda ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
