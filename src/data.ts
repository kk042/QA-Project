import { Product } from './types';

export const products: Product[] = [
  {
    id: 'prod-qa-scanner',
    title: 'QA Pro-Scanner X1 Industrial Toolkit',
    category: 'Automation',
    price: 2499.00,
    originalPrice: 3100.00,
    savePercentage: 20,
    description: 'Precision-engineered industrial dual-laser scanning assembly for automated dimensional control and defect recognition.',
    longDescription: 'The QA Pro-Scanner X1 is the industry-standard for high-precision automated quality assurance. Featuring a dual-laser 3D mapping array and integrated AI-driven defect detection, it provides real-time feedback loops for manufacturing pipelines. Engineered with aerospace-grade aluminum and a modular sensor interface for seamless integration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsarG7Opx-Vqr7oRZ-q-dVyCBa_SgYfB9ymx-9dTGfSQmxrw3PDLhDv8yedG4l6xWMMbii3GjPnbSP9j7LU_8XKrfqNZDhfksf1u-7qLbqLPfNCy0QNwCRHjbbIy9NROMLiNOtCVFQ5twYqWB-fCoVSR-B2fDD0p9K9C4uIa-lx7Sq7nYuJ7brLuIzOt1Rl-FKfDEUCbiixZDoq48VQgDEQkl5ND5rG7MKJf2tvYVbFu_hkRawEDVJ6LpSAvzLJ-CYlX9lrSlnAg4c',
    detailImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsarG7Opx-Vqr7oRZ-q-dVyCBa_SgYfB9ymx-9dTGfSQmxrw3PDLhDv8yedG4l6xWMMbii3GjPnbSP9j7LU_8XKrfqNZDhfksf1u-7qLbqLPfNCy0QNwCRHjbbIy9NROMLiNOtCVFQ5twYqWB-fCoVSR-B2fDD0p9K9C4uIa-lx7Sq7nYuJ7brLuIzOt1Rl-FKfDEUCbiixZDoq48VQgDEQkl5ND5rG7MKJf2tvYVbFu_hkRawEDVJ6LpSAvzLJ-CYlX9lrSlnAg4c',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnLlkIEfgjDqQCAwf_4IeZi2t5RKC9_IwHasu6jXfKMZwETb_lAtm-tk3c2JjTRR2DSU9EgSWhrSdbRIw_9oUxjOVja25kAS4vt3cbWZv4gXUOLneS7V52VT7qG-m0Eb2PaVtFJpJk6KWa3_tnbVFUaopeeNxiMD4fogH43VmZRT76Hx31lAz9T4e8poczQ-fvWKyYaMv4kKsIT9s3sbBxbGmr8w8HRQkQCI4bco8wbvYnJqFlnS-jgr2FrsOgVHBpQJ_18QzP0kUN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkUhj3UwMNv5CmDfnMa3-rCwrczmgGQ-B2J-JBYd0iBWaj5yIWFfrvVId50FaZStEnveRdJrbuNvVOlclpKI8GHzDT5SY_6Ss7Whzn5T6PWD_0XA5R1OZ3uodsCHMkzG-ZZOGDYygVcAvKwDiHCx9OzEcckqOzzOtFNat-oFAk-pgFFUjAazzn0UdcuaeHwaBX2iOffuGNox1lRysYE0tsqCu1h7Q3A-l4iufzpM96CgKmV1X125BCLq7uvTk7jxX_YL5YcGBsS9cd',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAENwLoUWBY2s1hAN_X_CHEn6WYtV_zs0L8HvTS7m2-sSLsvF9D-6wXwipNN388lwntJhYNoX4SAtBWmQR4yCLihxoKZEuWwHRjUV0d5eA8BqAIH5wTU7MKTMb6tqSxU8IsuddbNFcSPmgyHITLCP6v0OevN389HmcfVKbdt6mI5ykawJ14BmAwoE7QaLd9xzit6wXHBPzVrPei2tWo5PHjk3BR9jsgLJFMyQRLUP5U9K7ZrB2wydEBwKl7TkLdpheFrAlJ3nWM9QAS'
    ],
    specifications: {
      'Accuracy': '±0.005mm',
      'Interface': 'USB-C / Ethernet / GPIO',
      'Scanning Speed': '2.4m pts/sec',
      'Operating Temp': '-10°C to +55°C',
      'Weight': '1.8 kg',
      'Laser Class': 'Class 2M ISO Safety compliant'
    },
    rating: 4.9,
    inStock: true
  },
  {
    id: 'prod-servo-x',
    title: 'Servo-X Prime Unit',
    category: 'Automation',
    price: 2499.00,
    description: 'Precision-engineered high-torque motor for complex assembly lines.',
    longDescription: 'High-responsiveness synchronous brushless servo motor optimized for multi-axis coordinated path generation. Equipped with optical encoders giving 24-bit real-time feedback accuracy and dynamic thermal-mitigation shielding.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0-LW4hH386ArbpDpk_J6-zUcbqAV1hF36Yn_Lpp7iNhZkjQexKTALFoMtcvjIJRv91CdDc7dbjSDC01ZtvX5qn74NrU-jvzKV5WLV2R5HFpcBCf0yltcUAH7hkp7xHBvoRRjT89oEFo7D5wj4f35cfA5uj0wzaSe3BOtZkjIxHXA6i6Xv0Ck1kgOe1_ifENfikITqqErZN5rYmgLgDxnOWCR9EN7QjswkF3CR5vpqkzsk_X6RJGzM2JtlkjnZz1UMPLjYCbzZsgrb',
    rating: 4.8,
    inStock: true,
    specifications: {
      'Torque Output': '12.5 Nm nominal',
      'Max Speed': '6000 RPM',
      'Feedback': '24-bit absolute encoder',
      'Protocol': 'EtherCAT / CANopen'
    }
  },
  {
    id: 'prod-opticscan',
    title: 'OpticScan L-Series',
    category: 'Quality Control',
    price: 845.50,
    description: 'Multi-spectrum visual inspection sensor for micro-defect detection.',
    longDescription: 'Compact active optical sensor array utilizing hyper-spectral laser triggers to discover micro-fractures, voids, and surface variances. Encased inside carbon-fiber structural tubing for heavy-duty industrial framing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0u5-sJTcu-gpJ29yZWfQifiGlpqpTc0unSEqubh8KvI2cs3xn5rlwe3Mgj1kqbB8qfKsEf2glqI8nfhO8IrKDqmDHtDhIe5OHVs7D8vCqB4F00uExG_B0cYgQgBRr3L4Z0taKb0K28DlhPvpRasI9BOAp7Amqd_TzaabVWi99cD5qufkyPkqJOSXvotYCZgV0pW-Bu47sOol5tFdnJIMfcgAPJAspObYuBvh4oBeS10-dG8NqqHhNIDt1aTplK5cqNbZ71dSMfCkx',
    rating: 4.7,
    inStock: true,
    specifications: {
      'Wavelength': 'Dual 450nm & 650nm active',
      'Resolution': '0.01 micro-meters',
      'Response Time': '< 0.5 ms',
      'Body Material': 'Anodized 6061-T6 Aluminum'
    }
  },
  {
    id: 'prod-corelogic',
    title: 'CoreLogic PLC 800',
    category: 'Automation',
    price: 1220.00,
    description: 'Next-gen programmable logic controller with native cloud integration.',
    longDescription: 'High-throughput controller featuring structured logic blocks, hot-swappable analog and digital IO terminals, and advanced firewall protection. Fully prepared for modern MES databases and server triggers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSiG0qvxos_jch_CWoEI0OncLSvk70QBeTCikuehrkaL7rN5Lf8MBwZtQk500JCfSMI6PIJG-HOjpsKTvWtjpeV0Cz6A56inGCoKKyk19KOlf_oc_hVI78K2mTxGBFhVgaLrM-qMoDeeuNquyjkjj9IRMmnB8IKHHGij1xZIPeXEmHwx9C3SV3zjbwwJcpgcn7gZjp8HFPS-q3aT7EpLgWs4X0HtyicHjKIjXvV1UOX6YP-0kIk5C-mRTlRkgbXV1M88BtBKhhDyva',
    rating: 4.9,
    inStock: true,
    specifications: {
      'CPU Core': 'Quad-core industrial ARM v8',
      'RAM Capacity': '4 GB ECC protected',
      'Mount Type': 'DIN rail standard 35mm',
      'IO Channels': '32 configurable'
    }
  },
  {
    id: 'prod-flowmaster',
    title: 'FlowMaster Kit V2',
    category: 'Quality Control',
    price: 499.99,
    description: 'Complete pneumatic control kit for small-scale fluid management systems.',
    longDescription: 'A custom, clean modular workspace component containing precision pressure regulators, proportional solenoid manifolds, and integrated microflow measurement indicators.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMAhXsX9543o0Vjb5eiml1d1Q1nw1j7y0i1F7cfSXVr6L0lTFQTHRCw1bmtsYVrQmbtsItJ70Jwqg6OWw2lsq6FnwizKIP0Jv2CEY78dgsTKv1PZV4yWdXZR0OJvdXd-yE9pIyL0iuryROm5dHuIyychXdS4qDSqK9ZzRQ0rqW5l70VdekMgm29m2tmF4GJnNBzltJMG68YfbG0ZZsmLDVSjI6tdacDKw4UuUSlIj7dAJn8yfQPYXnFmEs5kxq8cWEWaRkMq_DVkTc',
    rating: 4.6,
    inStock: true,
    specifications: {
      'Flow Range': '0.1 to 20.0 L/min',
      'Pressure Spec': 'Up to 8 bar maximum',
      'Inputs': '1/4 inch push-to-connect',
      'Voltage': '24V DC excitation standard'
    }
  },
  {
    id: 'prod-neuralnode',
    title: 'NeuralNode Edge AI',
    category: 'Automation',
    price: 1890.00,
    description: 'High-performance edge computing node for real-time data processing.',
    longDescription: 'Designed for edge computing workloads in factory environments. It runs real-time tensor inference directly from visual control feeds and sensor inputs, enabling immediate machine protection actions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBWlyidNJ_p_RK0AC4N7Q2YKczd1xP6x9SM1GT5OpDhVXOiwaxO_psNd_VdMzIMD7YND4g61eUAsH7HS5dLmPekcqt6hLuUzV1t9SSc4MkG5IPSac9qARKmD5XtcggbIfbnth9exDi2Xi2kLl8UeLGCg1yF6vWzESILIWk1rU3Jx_ppDMWZDnpFpRj7kVYtRlw_yTkjS1DSjKGQ3aUMc_QqhRLpuQfnYhxYmJrLazlSKZPR_KV-Ini8J3CO5BkejcQJ5fQu_keJf81',
    rating: 4.9,
    inStock: true,
    specifications: {
      'AI Power': '40 TOPS INT8 acceleration',
      'Cooling': 'Fanless passive fins',
      'Housing': 'IP67 dust & water proof seal',
      'Dimensions': '120 x 120 x 45 mm'
    }
  },
  {
    id: 'prod-precision-caliber',
    title: 'Precision Caliber Kit',
    category: 'Quality Control',
    price: 345.00,
    description: 'Professional measurement and calibration set for ultra-tight tolerances.',
    longDescription: 'High-grade manual calibration standard set containing micrometers, depth calipers, and gauge blocks treated with anti-corrosive carbon alloys for reliable lab use.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzEtSWZtmrEPgG0Xt0ML8EqqvHiyKI2h4XfHeXZbONH8CFWHMxTRJGoUmJbhtjLcuMM9qaSag0FYboDaULvjedXLIYtAXnOKOl-SA0zxpLHwO8BEJqzgYcxgIJdaTX66Jx25UXeoXUEjrfvoqVazcYxSg9GOttxxZ1hAn1LRE8SuoPQpsR1mwdz6q5eK-b0SJOHNQpwqYAC5UcRucHZ00qb8YbzgHHXJnLtx3zu9kjg6KUgFrlCNS14iudfJ1bO3MEb8RtHySbW0Hh',
    rating: 4.8,
    inStock: true,
    specifications: {
      'Calibration Class': 'Enterprise Grade A verification',
      'Included Tools': 'Digit micrometer, depth caliper',
      'Storage Case': 'Molded high-density foam case',
      'Certificates': 'Full traceability report'
    }
  },
  {
    id: 'item-logic-analyzer',
    title: 'Logic Analyzer',
    category: 'Industrial Kits',
    price: 1249.00,
    description: 'High-Frequency multi-channel logic analyzer for hardware inspection.',
    longDescription: 'A multi-channel evaluation toolbox for digital systems and protocol tracing. Delivers clear, sharp timing waveforms on an advanced integrated display panel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEj6KV1R6rxPbPioOE6t42GT1_0pd29-9qwkcdzl8FhLhBabvgSmF1YF3Au8bvWAmtsJZoJ-GssTgm-q5QTi6scKsNrC69M5yOyD2j7lyYffP3u61FZqMwDBo1C12TizyPs2FC7gihxcyepwi-vAt6QpEdZzvmbAGq4IXij0CrSUVe_gkVDMyANmzINemLL1FtrpIVXN4vQ6tGVD2R0u8DXZV30VHCCNXyVPXJXqtQ8OtZylPjqkzaWj7_0RpsLeX2g-SIW6PYg15K',
    rating: 4.7,
    inStock: true,
    specifications: {
      'Channels': '32 digital diagnostic',
      'Max Sample Clock': '1.2 GHz sampling',
      'Buffer Memory': '64 MSamples'
    }
  },
  {
    id: 'item-multimeter',
    title: 'Digital Multi-meter Pro',
    category: 'Sensors',
    price: 385.00,
    description: 'Precision engineering digital multimeter for industrial workshops.',
    longDescription: 'High-safety category IV certified multimeter designed for high-power distribution diagnosis, containing true-clamping calibration sensors and high contrast backlight visualizers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGRgUU0PAabeLxuueL3jDMjugxHZlzDlMMqfpqDDdg9Hn_l0e8gGQRye9GwqdUz4YoIx6b4OovQmqg4b-NzQ2X1_oVSftZOS-D8PgoREJEdv8wvjnbwgux-s91anP3hyqKsDFSkL5QGVsYYO1xtqJBdElVZ5FCZJryUC-IazFrAdEMlR8hmNJdIHOxSmhCxOg7DMJOVJiHq1HHaJq9toypGTWbInEToNlOyb90CqxUirvSLNcguhKG2Rw8bN6jBiIwUTuL1z0q5ygz',
    rating: 4.8,
    inStock: true,
    specifications: {
      'Voltage Limits': 'Up to 1000V True RMS',
      'Standards': 'CAT III 1000V / CAT IV 600V safety',
      'Inclusions': 'Alligator lead clips, thermal probe'
    }
  },
  {
    id: 'item-sensor-kit',
    title: 'Industrial Sensor Kit',
    category: 'Industrial Kits',
    price: 520.00,
    description: 'Comprehensive automation kit featuring various temperature, proximity, and layout sensors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCULL4kI8-pKKh01kGELrmepY3UBUxlJRQF2RTCIHN4MB1gPlaDr1ikQlfjMh9--rxCNdrGZZNG37aTEMeFOGmvnRNHeaAcCS-arUhxLf6Or_p4-lbfzGL16c95Ccfw1FT8poSMEt7YY5ybcjegh-OtPKYy2OmapVD0IK31gp97oJ5Y8kx3ooOvs9ItoLMdSGF_IfTXy_8WjIZ7MZEz4CM16MCETpkOqsL1Djh--ysw88dJEZoHrKFEAQf0Akyv-RcB9y5D4Z8tAMPL',
    rating: 4.9,
    inStock: true,
    specifications: {
      'Modules': 'Temp transducers, optical couplers, magnetic limits',
      'Interface': 'IO-Link protocol integrated',
      'Documentation': 'Comprehensive schema schematics included'
    }
  },
  {
    id: 'prod-precision-mount',
    title: 'Precision Mount Pro',
    category: 'Industrial Kits',
    price: 450.00,
    description: 'Mechanical structural gears and bracket assemblies for stable sensor staging.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNp084t9STSnPvIzpXktLgEOjH67d8lq7lyi3p6jlN_NDjOOuK6xf_WYReV4zv8wTVWayAq61vx5lbFEIxO8qdA1CMAfgipKJD8WVPhwV795XeytJzDNf8LnIVlG4Js-waooGR63KVNTBY0Pwnd4lpmTitpqZMi70YI_wmfufiAq3NJXg4BVb2z5zLMc5WV8C0GxPzbll7_kv8_5u5A9n265MoTboTolpK-UR27UdocNRVJJBqzauM1jRJvUqDkYKkm7fX5u7Ciwbz',
    rating: 4.5,
    inStock: true,
    specifications: {
      'Compatibility': 'Universal T-slot rail structure',
      'Max Load': '80 kg static weight',
      'Finish': 'Polished alloy matte gray'
    }
  },
  {
    id: 'prod-datacore-hub',
    title: 'DataCore Display Hub',
    category: 'Sensors',
    price: 899.00,
    description: 'Rugged visual status monitor and metrics consolidator for system diagnostics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB60CMjHYRTUplb5_L6peRsu0QE8_rJYsDdWdmySimsMxl4aR7vzV5jPoFZGXBx08W1mnOuKW0WiFq8BJzXISg_jgem0KaDxLWnze_sn89cONnafXGNH4Lrd_I_MpBamE03McMjSjH_b-NDFWwmbUhzEm3pGAbDncu79G7wVRhwWSdqrzsYn1750h56-DdtHc2lTbbXdmtnmsYZisRSSCdFlI1fZ8B1_ke1Gd3AP4HRb4Wow9tp-o0mIj84FemlVBL5jgOXDzqvsBaD',
    rating: 4.8,
    inStock: true,
    specifications: {
      'Screen Size': '12.1-inch industrial panel',
      'Resolution': '1920 x 1080 Full HD IPS',
      'Protection': 'Full IP65 front protection panel'
    }
  },
  {
    id: 'prod-flexarm-mini',
    title: 'FlexArm M3 Mini',
    category: 'Automation',
    price: 1200.00,
    description: 'Integrated 3-axis mini robotic arm for light assembly assignments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkJhZajlz_ambHMWpIMc0atjM0NKSxFNu4ZxvuSi6cWxR8ZSmtx4_tY0nRNxxnnPiHQJKffEadhoGGL__KCaRFRkl36nNUAV-rZTwNdoZCsbk5KrvalD_yj_MP1LdBZjOltCPamm3AdIlmrxofiJbI1cO1qNrJEx4J7TOD_T9lAi2-gWhaEgHQigXrYeGuBsf_ow1l2xWk-8GqQNpGhJQCw_jr9Fnf8W65sCEf0BwjBW9s7z57jlk31gWjxNNwzE87ppVLCS_wCxh2',
    rating: 4.7,
    inStock: true,
    specifications: {
      'Workspace': '500mm hemispherical reach',
      'Repeatability': '±0.02 mm exact tracking',
      'Control Feed': 'Unified Modbus TCP link'
    }
  },
  {
    id: 'prod-omnisense-thermal',
    title: 'OmniSense Thermal 4',
    category: 'Sensors',
    price: 620.00,
    description: 'High-end multi-spectrum thermal sensor array with microsecond logging capabilities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbrGzA4YxV3cfTmlIh-l2ClSpUPcTZnSYH3r8pxAOvKMtr7tnNAP0vdfFcjrqdFM_8Lureu6aErvnVFHetnRr9V2o4F1yu2U61gRfMisnNgWYLfrxFDdIdw0JXeuyW7viHOk9AIalBTWAgxCtdNOvwUquPFO7xD8Fqspx5-JtenDtbzL4fyphDrr7OvvejVCwInbrhuOsdcXZp6Fmlm4a5_PiNWCp4Z_RSiASt3TjCs9K6UqYteXP5a30yVs4SX9FLmCuQFbSH-PAn',
    rating: 4.8,
    inStock: true,
    specifications: {
      'Detection Type': 'Infrared active array matrix',
      'Scan Refresh': '80 Hz responsive sweep',
      'Accuracy Offset': '±0.1 degrees Celsius precision'
    }
  }
];
