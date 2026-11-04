# report_data.py
# Contains student names, design themes, and spintax text templates for the internship reports.

STUDENTS = [
    "FARSAN ALI",
    "SALMAN FARIS",
    "ANWAR PC",
    "RIFA",
    "DHIYA FATHIMA MP",
    "FATHIMA DILNA KP",
    "FATHIMA FIDHA KN",
    "HAMNA FATHIMA MP"
]

THEMES = {
    "FARSAN ALI": {
        "font": "Inter",
        "primary_color": (30, 58, 138),     # Navy Blue #1E3A8A
        "secondary_color": (59, 130, 246),  # Muted Blue #3B82F6
        "margin_inches": 1.0,
        "line_spacing": 1.15,
        "cover_style": "minimalist",
        "header_footer_style": "simple"
    },
    "SALMAN FARIS": {
        "font": "Liberation Serif",
        "primary_color": (6, 78, 59),       # Forest Green #064E3B
        "secondary_color": (217, 119, 6),   # Gold #D97706
        "margin_inches": 1.15,
        "line_spacing": 1.25,
        "cover_style": "classic",
        "header_footer_style": "traditional"
    },
    "ANWAR PC": {
        "font": "DejaVu Sans",
        "primary_color": (55, 65, 81),      # Charcoal #374151
        "secondary_color": (220, 38, 38),   # Crimson #DC2626
        "margin_inches": 0.9,
        "line_spacing": 1.2,
        "cover_style": "left_accent",
        "header_footer_style": "modern"
    },
    "RIFA": {
        "font": "DejaVu Serif",
        "primary_color": (15, 118, 110),    # Teal #0F766E
        "secondary_color": (249, 115, 22),   # Coral #F97316
        "margin_inches": 1.0,
        "line_spacing": 1.3,
        "cover_style": "double_border",
        "header_footer_style": "classic"
    },
    "DHIYA FATHIMA MP": {
        "font": "Liberation Sans",
        "primary_color": (51, 65, 85),      # Slate Blue #334155
        "secondary_color": (148, 163, 184), # Silver #94A3B8
        "margin_inches": 1.1,
        "line_spacing": 1.15,
        "cover_style": "split_title",
        "header_footer_style": "clean"
    },
    "FATHIMA DILNA KP": {
        "font": "Nimbus Roman",
        "primary_color": (91, 33, 182),     # Royal Purple #5B21B6
        "secondary_color": (236, 72, 153),  # Rose Pink #EC4899
        "margin_inches": 1.0,
        "line_spacing": 1.25,
        "cover_style": "elegant_center",
        "header_footer_style": "stylish"
    },
    "FATHIMA FIDHA KN": {
        "font": "Cantarell",
        "primary_color": (136, 19, 55),     # Burgundy #881337
        "secondary_color": (245, 158, 11),  # Amber #F59E0B
        "margin_inches": 0.95,
        "line_spacing": 1.2,
        "cover_style": "geometric",
        "header_footer_style": "structured"
    },
    "HAMNA FATHIMA MP": {
        "font": "Utopia",
        "primary_color": (194, 65, 12),     # Rust/Orange #C2410C
        "secondary_color": (71, 85, 105),   # Slate/Charcoal #475569
        "margin_inches": 1.05,
        "line_spacing": 1.2,
        "cover_style": "elegant_center",
        "header_footer_style": "stylish"
    }
}

# The spintax content of the entire report.
# Placed here to enable clean imports.
# Placeholder formats: {option1|option2|option3}
REPORT_CONTENT = {
    # Part 1 Intro
    "part1_intro": (
        "{The modern telecommunication landscape is fundamentally powered by high-speed data transmission systems that rely on optical physics.|"
        "Today's telecommunication sector is heavily reliant on high-speed data transmission networks built on principles of optical physics.|"
        "Modern communications are fundamentally driven by high-speed data transfer infrastructures operating on optical physics principles.}"
        " {Transitioning away from traditional legacy copper wire infrastructures, optical fibers utilize light pulses to transmit vast amounts of data over immense distances with minimal attenuation.|"
        "Replacing outdated copper-wire systems, fiber-optic lines deploy pulses of light to carry massive quantities of data across long distances while keeping loss exceptionally low.|"
        "Moving beyond legacy copper-wire networks, optical fibers guide light signals to transport large amounts of data over vast distances with minimal signal degradation.}"
        " {This part of the internship report establishes a detailed technical study of modern Fiber-Optic Communication (OFC) and Fiber-to-the-Home (FTTH) network architectures, directly informed by industrial training with Bfone Fibernet.|"
        "This section of the report details a technical analysis of modern Fiber-Optic Communication (OFC) and Fiber-to-the-Home (FTTH) setups, based on practical experience at Bfone Fibernet.|"
        "This initial module presents a comprehensive technical study of contemporary Fiber-Optic Communication (OFC) and Fiber-to-the-Home (FTTH) infrastructures, stemming from training at Bfone Fibernet.}"
        " {The primary objective of this module is to comprehensively trace the optical signal pathway from its structural origins to real-world residential deployment.|"
        "Our main goal in this part is to trace the complete pathway of the optical signal from the central exchange to residential installations.|"
        "The core purpose here is to outline the entire journey of the light signal, from the hardware source down to the home ONT.}"
        " {The chapters herein analyze the physical principles of Total Internal Reflection (TIR) that guide light within glass matrices, the structural mechanics of modern multi-core cables, and the quantitative engineering required for link budgeting and structural calculations.|"
        "The chapters in this section study Total Internal Reflection (TIR) guiding light in glass cores, multi-core cable design, and the calculations needed for fiber link budgets.|"
        "These chapters break down the principles of Total Internal Reflection (TIR) in fiber cores, the anatomy of optical cables, and mathematical modeling for link loss budgeting.}"
        " {Furthermore, this section details practical operational protocols, including high-precision fusion splicing, color-coding standards, network diagnostics, and troubleshooting methodologies implemented in active field environments.|"
        "Additionally, this part covers real-world field operations like fusion splicing, fiber color coding, and diagnosing link faults in active environments.|"
        "Moreover, we document standard field procedures, including precision splicing, color code identification, and troubleshooting techniques used by technicians.}"
        " {This comprehensive study concludes with a field analysis of a regional telecommunication distribution center at the BSNL Exchange Office.|"
        "This section finishes with a technical summary of our field study at the Manjeri BSNL Exchange Office.|"
        "The module wraps up with observations made during the field visit to the local BSNL Exchange.}"
    ),
    
    # Chapter 1 Overview
    "ch1_overview": (
        "{Optical Fiber Communication (OFC) is a method of transmitting information from one place to another by sending pulses of light through an optical fiber.|"
        "Fiber-optic communication (OFC) involves transmitting data from a source to a destination by sending light pulses through glass or plastic fibers.|"
        "Optical Fiber Communication (OFC) refers to the technique of transferring information across distances using modulated light pulses guided through thin fibers.}"
        " {The light forms an electromagnetic carrier wave that is modulated to carry information.|"
        "The light behaves as an electromagnetic carrier wave, which is modulated to transport voice, data, and video signals.|"
        "In this system, light acts as an electromagnetic carrier wave modulated to carry digital and analog data.}"
    ),
    
    # Chapter 1.2 introduction
    "ch1_link_intro": (
        "{A typical optical fiber communication link consists of several key components that facilitate the transmission of data:|"
        "The basic structure of a fiber-optic communication link includes several essential elements:|"
        "A standard fiber-optic link is made up of a sequence of core hardware blocks:}"
    ),
    
    # Chapter 1.2 components
    "ch1_link_components": [
        "{Encoder/Source: Converts data into electrical signals.|Encoder/Source: Takes input data and translates it into digital electrical pulses.}",
        "{Transmitter (E/O): Converts electrical signals into optical signals using LEDs or LASERs.|Transmitter (E/O): Uses a semiconductor LED or laser diode to convert electrical pulses into light signals.}",
        "{Optical Fiber: The medium that guides the light signal.|Optical Fiber: The silica glass or plastic medium that guides the light pulse over a distance.}",
        "{Receiver (O/E): Uses a photo-detector (PIN or APD) to convert light back into electrical signals.|Receiver (O/E): Employs a photodiode (PIN or APD) to detect the light signal and convert it back to electrical form.}",
        "{Decoder: Recovers the original data from the signal.|Decoder: Reconstructs the original digital data from the electrical pulses.}"
    ],
    
    # Chapter 1.3 advantages
    "ch1_advantages": [
        "{Non-conductive: No risk of sparks or electrical hazards.|Non-conductive: Made of glass/plastic, eliminating electrical spark risks and grounding problems.}",
        "{Electromagnetic Immunity: Immune to EMI and lightning.|Electromagnetic Immunity: Unaffected by electromagnetic interference (EMI), radio frequency interference, or lightning strikes.}",
        "{Large Bandwidth: Can carry massive amounts of data.|Large Bandwidth: Capable of supporting incredibly high data rates and channel capacities.}",
        "{Low Loss: Signal attenuation is significantly lower than copper cables.|Low Loss: Extremely low signal attenuation, allowing long spans without repeaters.}",
        "{Small and Lightweight: Easier to install and transport.|Small and Lightweight: Thin profile and lightweight nature simplify installation in conduits and aerial runs.}"
    ],
    
    # Chapter 2.1 TIR
    "ch2_tir": (
        "{Light travels through the fiber core based on the principle of Total Internal Reflection (TIR).|"
        "The propagation of light along the fiber core is governed by the physical principle of Total Internal Reflection (TIR).|"
        "Light is guided along the length of the optical fiber core using the principle of Total Internal Reflection (TIR).}"
        " {For TIR to occur, two conditions must be satisfied:|"
        "To achieve Total Internal Reflection, the following criteria must be met:|"
        "The occurrence of TIR requires two strict conditions:}"
    ),
    
    "ch2_tir_conditions": [
        "{The refractive index of the core (n1) must be greater than the cladding (n2).|The core material must have a higher refractive index (n1) than the surrounding cladding (n2).}",
        "{The angle of incidence must be greater than the critical angle (theta_c).|The light must strike the core-cladding boundary at an angle of incidence exceeding the critical angle (theta_c).}"
    ],
    
    "ch2_tir_formula": (
        "{The critical angle is calculated as:|The mathematical formula for the critical angle is:|The critical angle value is determined by:}"
    ),
    
    # Chapter 2.2 Cable Anatomy Intro
    "ch2_anatomy_intro": (
        "{A standard OFC cable consists of several protective and structural layers:|"
        "A typical optical fiber cable is constructed with the following layers from the inside out:|"
        "The physical architecture of a standard fiber cable consists of these core elements:}"
    ),
    
    "ch2_anatomy_layers": [
        "{Core: The innermost glass or plastic part where light travels.|Core: The central glass or plastic channel through which the light pulses travel.}",
        "{Cladding: Layer with a lower refractive index that reflects light back into the core.|Cladding: The surrounding layer of glass with a lower refractive index that keeps the light trapped in the core.}",
        "{Buffer: Protects the fiber from moisture.|Buffer Coating: A plastic layer surrounding the cladding to shield it from moisture and mechanical stress.}",
        "{Strength Member: Usually Aramid yarn (Kevlar) to prevent cable breakage.|Strength Member: High-tensile aramid yarn (Kevlar) or steel wire to absorb tension during pulling.}",
        "{Outer Jacket: Protects against environmental damage.|Outer Jacket: The tough plastic outer sheath (PVC or PE) protecting the cable from environmental factors.}"
    ],
    
    # Chapter 2.3 Cable Types
    "ch2_cable_types": [
        "{Tight-Buffer Cable: Used mainly for indoor applications and patch cords.|Tight-Buffer Cable: Features thick buffer coating directly on the fiber, ideal for indoor routing and patch cords.}",
        "{Loose-Tube Cable: Used for outdoor environments (ducts, direct burial).|Loose-Tube Cable: Fibers lie loose inside gel-filled tubes, providing excellent protection against water and temperature shifts in outdoor ducts.}",
        "{Ribbon Cable: Dozens of fibers packed together for high-density applications.|Ribbon Cable: Multiple fibers aligned in flat rows, maximizing fiber density in tight spaces.}"
    ],
    
    # Chapter 3.1 Splicing Intro
    "ch3_splicing_intro": (
        "{Splices are permanent connections between two fibers. The main methods are:|"
        "Fiber splicing refers to creating permanent joins between two fiber cores. The primary techniques include:|"
        "Splicing is used to make permanent connections between fiber ends. The two main types are:}"
    ),
    
    "ch3_splicing_types": [
        "{Fusion Splicing: Using an electric arc to melt and fuse fibers.|Fusion Splicing: Fusing the two glass ends together using a high-voltage electric arc.}",
        "{Mechanical Splicing: Aligning fibers using a mechanical fixture.|Mechanical Splicing: Aligning fiber cores within a precision alignment fixture and securing them.}"
    ],
    
    # Chapter 3.2 Logarithmic conversion
    "ch3_log_conv": (
        "{Optical power values are measured using the logarithmic decibel-milliwatt (dBm) scale to make it easy to calculate losses across long fiber links:|"
        "The logarithmic decibel-milliwatt (dBm) scale is standard in fiber optics to simplify power loss calculations across links:|"
        "To make loss calculations additive rather than multiplicative, optical power is measured using the logarithmic decibel-milliwatt (dBm) scale:}"
    ),
    
    # Chapter 3.3 Splitter Loss
    "ch3_splitter_loss": (
        "{The theoretical insertion loss of an optical splitter scales based on the number of output ports (N):|"
        "The ideal insertion loss of a passive optical splitter depends directly on the split ratio or output ports (N):|"
        "An optical splitter's theoretical insertion loss increases mathematically with the number of output ports (N):}"
    ),
    
    # Chapter 3.4 Standard loss values intro
    "ch3_standard_loss_intro": (
        "{To perform reliable link calculations, the engineering team uses the following standard attenuation parameters:|"
        "The following standard loss values are utilized by technicians to calculate link budgets:|"
        "For network design and planning, the standard component attenuation values are defined as:}"
    ),
    
    # Chapter 3.5.1 Case study blueprint
    "ch3_case_study_blueprint": (
        "{Consider a regional fiber run managed by Bfone Fibernet spanning a total distance of 7 km. The link includes 4 fusion splices, 2 SC/UPC connector pairs, a 1 × 16 splitter, and a 1 × 8 cascading splitter module.|"
        "Let us examine a 7 km optical fiber link operated by Bfone Fibernet. This specific network span contains 4 fusion splices, 2 SC/UPC connectors, and two splitters in series: a 1 × 16 and a 1 × 8 splitter.|"
        "As a practical case study, consider a 7 km fiber link installed by Bfone Fibernet. The link features 4 fusion junctions, 2 SC/UPC connector pairs, and a cascaded splitter configuration consisting of a 1 × 16 and a 1 × 8 unit.}"
        " {The total link budget metrics break down into the following distinct attenuation values:|"
        "The attenuation values for the individual components of this link are as follows:|"
        "The loss budget details for this specific fiber span are calculated below:}"
    ),
    
    # Chapter 3.5.1 case study list
    "ch3_case_study_list": [
        "{Fiber Line Attenuation Loss: 7 km × 0.40 dB/km = 2.8 dB|Fiber line loss: 7 km of fiber at 0.40 dB/km results in a loss of 2.8 dB}",
        "{First Stage Insertion Loss (1 × 16 Splitter) = 13.0 dB|First splitter stage (1 × 16) loss: 13.0 dB}",
        "{Second Stage Insertion Loss (1 × 8 Splitter) = 10.0 dB|Second splitter stage (1 × 8) loss: 10.0 dB}",
        "{Total Mechanical Splice Losses: 4 × 0.10 dB = 0.4 dB|Fusion splice losses: 4 splices at 0.10 dB each equals 0.4 dB}",
        "{Total Dynamic Connector Losses: 2 × 0.35 dB = 0.7 dB|Connector losses: 2 SC/UPC pairs at 0.35 dB each equals 0.7 dB}"
    ],
    
    # Chapter 3.5.1 summation
    "ch3_case_study_sum": (
        "{Summing these individual loss values yields the total attenuation for the link:|The total insertion loss is calculated by adding the individual attenuation values:|The sum of these individual components represents the total link attenuation:}"
    ),
    
    # Chapter 3.5.2 Link Status Analysis
    "ch3_link_status": (
        "{Standard ONT modems require an input signal level within an optical power range between -10 dBm and -28 dBm to operate reliably:|"
        "For reliable performance, typical ONT optical receivers must receive light power in the range of -10 dBm to -28 dBm:|"
        "The acceptable operating window for standard ONT fiber modems is between -10 dBm and -28 dBm:}"
        " {Receiver Sensitivity Threshold <= -28 dBm|"
        "ONT Sensitivity Limit <= -28 dBm|"
        "Minimum Receiver Threshold <= -28 dBm}"
    ),
    
    "ch3_link_status_conclusion": (
        "{Because the calculated total loss for this link is 26.9 dB, a typical transmitter power output of 0 dBm ensures that the received power level stays above the receiver’s minimum sensitivity threshold (-26.9 dBm >= -28 dBm). This mathematical verification confirms that the fiber link will function correctly and maintain high signal reliability.|"
        "Since the total attenuation is 26.9 dB, assuming an OLT transmitter power of 0 dBm, the received signal power is -26.9 dBm. This is above the receiver threshold of -28 dBm, confirming that the fiber link is viable and will operate reliably.|"
        "With a calculated link loss of 26.9 dB and a transmitter power of 0 dBm, the signal strength at the customer premises is -26.9 dBm. Because this value is stronger than the -28 dBm sensitivity limit, the link will operate successfully.}"
    ),
    
    # Chapter 4
    "ch4_splicing_def": (
        "{Splicing is the process of joining two optical fiber cores permanently to create a continuous optical path.|"
        "Fiber splicing is defined as the technique of permanently connecting two optical fiber ends to form a seamless light path.|"
        "Splicing refers to the permanent joining of two optical fiber cores to allow continuous light propagation.}"
        " {Unlike connectors, which are designed for frequent re-mating, splices are meant to be enduring and stable joints.|"
        "Unlike removable connectors, splices are designed to be permanent, stable connections.|"
        "While connectors are built for quick disconnects, splices are permanent joints optimized for stability.}"
        " {The primary goal is to minimize optical loss and prevent back-reflection.|"
        "The main objective of splicing is to minimize insertion loss and keep return loss (back-reflection) low.|"
        "The primary design target is to keep optical attenuation as low as possible and prevent back-reflection.}"
    ),
    
    "ch4_types_intro": (
        "{The main methods used in the industry are:|The two principal splicing techniques are:|Technicians utilize two primary methods for joining fibers:}"
    ),
    
    "ch4_fusion_details": (
        "{This is the most reliable and industry-standard method. It involves using an electric arc to melt and fuse two fiber ends together.|"
        "Fusion Splicing is the standard technique in telecom networks. It uses a controlled electric arc to melt and fuse the glass fiber ends.|"
        "This is the premium industry-standard method, which utilizes an electric arc to melt the glass tips and fuse them permanently.}"
        " {Loss: Typically 0.01 to 0.05 dB.|"
        "Typical Insertion Loss: 0.01 to 0.05 dB.|"
        "Attenuation: Usually between 0.01 dB and 0.05 dB.}"
        " {Usage: Backbone networks, long-haul links, and FTTH.|"
        "Applications: Used in long-distance backbones and residential FTTH deployments.|"
        "Key Applications: Long-haul networks, fiber backbones, and FTTH distribution.}"
    ),
    
    "ch4_mech_details": (
        "{This method uses a mechanical fixture to align the fiber ends and an index-matching gel to facilitate light transmission between the cores.|"
        "Mechanical splicing aligns the two fiber ends inside a precision sleeve with index-matching gel to bridge the air gap.|"
        "This technique uses a mechanical alignment sleeve containing index-matching gel to hold the fibers in alignment.}"
        " {Loss: Typically 0.2 to 0.5 dB.|"
        "Typical Insertion Loss: 0.2 to 0.5 dB.|"
        "Attenuation: Usually ranges from 0.2 dB to 0.5 dB.}"
        " {Usage: Emergency repairs, temporary setups, and environments where fusion equipment is not available.|"
        "Applications: Temporary fiber joins, emergency field repairs, and low-cost terminations.|"
        "Key Applications: Quick field repairs, testing setups, and situations without access to fusion splicers.}"
    ),
    
    "ch4_importance": [
        "{Link Extension: Connecting multiple segments to build long-distance networks.|Link Extension: Joins shorter fiber spools to build long-distance network runs.}",
        "{Signal Integrity: Maintaining near-perfect light transmission with minimal attenuation.|Signal Integrity: Assures optimal light propagation and very low insertion loss.}",
        "{Back-reflection Control: Minimizing return loss, which protects laser sources.|Back-reflection Control: Limits return loss (reflections) to protect high-power laser transmitters.}",
        "{Durability: Providing maintenance-free connections that withstand environmental stress.|Durability: Creates robust, long-lasting joints that resist temperature and physical strain.}"
    ],
    
    "ch4_steps": [
        "{Stripping: The 250 µm outer coating is removed using specialized fiber strippers without scratching the glass.|Stripping: Stripping away the 250 µm polymer buffer coating using precision fiber strippers to expose bare glass.}",
        "{Cleaning: The bare glass fiber is thoroughly cleaned using 99% Isopropyl Alcohol (IPA) and lint-free wipes to remove all contaminants.|Cleaning: Cleaning the bare glass surface with 99% pure Isopropyl Alcohol (IPA) and lint-free wipes.}",
        "{Cleaving: The fiber is cut using a precision diamond-blade cleaver to ensure a perfect 90-degree end face (angle < 0.5°).|Cleaving: Cutting the fiber using a precision cleaver to achieve a flat 90-degree angle (less than 0.5 degrees deviation).}",
        "{Fusion: The fiber ends are aligned using the Profile Alignment System (PAS) and fused using an electric arc at 2000°C.|Fusion: Aligning the fibers automatically using PAS and applying a localized electric arc to fuse the glass at 2000°C.}",
        "{Protection: A heat-shrink splice sleeve is applied and heated to protect the joint from physical damage and moisture.|Protection: Sliding a heat-shrink protector sleeve over the splice point and baking it in the splicer's oven to seal it.}"
    ],
    
    "ch4_advantages": [
        "{Lowest possible insertion loss.|Provides the absolute lowest signal attenuation (< 0.05 dB).}",
        "{Permanent and highly reliable joints.|Forms a highly stable, permanent glass-to-glass bond.}",
        "{Resistant to vibration and temperature fluctuations.|Unbothered by mechanical vibrations and thermal expansion.}",
        "{Space-efficient for high-density fiber enclosures.|Very compact, fitting easily into splice trays and closures.}"
    ],
    
    "ch4_future": [
        "{Automation: Developing fully autonomous AI-driven splicing robots for sub-sea and hazardous environments.|Automation: Introduction of automated splicing machines and robotics for harsh environments.}",
        "{Multi-core Fiber Splicing: Moving beyond single-core to support high-density multi-core fibers to increase bandwidth capacity.|Multi-core Fiber Splicing: Upgrading equipment to splice multi-core fibers that support higher spatial bandwidth.}",
        "{Enhanced Precision: Integrating advanced nanotechnology for near-zero loss splicing in extreme environments.|Enhanced Precision: Incorporating nanometer-level alignment to reach near-zero signal loss in critical paths.}"
    ],
    
    "ch4_conclusion": (
        "{Optical fiber splicing is the foundation of modern high-speed communication. By ensuring a seamless and permanent joint, it guarantees that data travels across vast distances with negligible loss. While fusion splicing is the preferred method for permanent infrastructure, mechanical splicing remains a vital tool for rapid, field-based repairs.|"
        "In summary, splicing is fundamental to building reliable optical infrastructure. Creating permanent, low-loss connections ensures that gigabit data speeds are maintained over long spans. Fusion splicing remains the gold standard, while mechanical connectors provide critical utility for quick repairs.|"
        "Ultimately, fiber splicing is a core skill in optical telecommunications. Permanent joins minimize attenuation, allowing light signals to traverse long distances. For primary network segments, fusion splicing is dominant, whereas mechanical splicing remains useful for emergency restoration work.}"
    ),
    
    # Chapter 5
    "ch5_ftth_overview": (
        "{Fiber-to-the-Home (FTTH) represents the ultimate evolutionary step in broadband access networks, replacing traditional copper-based infrastructures (like DSL or Coaxial cables) entirely with optical fiber lines directly to individual subscriber premises.|"
        "Fiber-to-the-Home (FTTH) is the modern standard for high-speed internet delivery, replacing legacy copper telephone and cable lines completely with fiber lines run directly to consumer homes.|"
        "FTTH represents the transition to complete optical networking, replacing copper phone networks (DSL) and coax networks with dedicated optical fibers directly to the home.}"
        " {Most modern FTTH networks utilize PON (Passive Optical Network) technology. The term “passive” is critical: it means the outer distribution network requires no electrical power between the provider’s central exchange and the customer’s home. Signals are routed and split using optical principles alone, drastically lowering operational costs, minimizing equipment failure due to power surges, and maximizing lifespan. This point-to-multipoint architecture allows a single optical fiber to serve multiple premises through splitters.|"
        "Most installations deploy Passive Optical Network (PON) technology. The word 'passive' indicates that the distribution path contains no active electronics and requires no power. Signals are routed using passive splitters, which lowers electricity usage, eliminates lightning damage to field devices, and reduces costs. This point-to-multipoint setup allows one central fiber core to serve many subscribers.|"
        "The dominant technology in FTTH is PON, or Passive Optical Network. It is 'passive' because there are no powered switches in the field; light is divided using glass splitters. This design reduces power consumption, cuts down on hardware failures, and lowers operating costs. Through this point-to-multipoint topology, a single fiber feeds multiple households.}"
    ),
    
    "ch5_layers_intro": (
        "{The physical infrastructure of an FTTH network is divided into three distinct geographical segments:|"
        "The physical deployment of FTTH networks consists of three main segments:|"
        "An FTTH network's physical layout is categorized into three key segments:}"
    ),
    
    "ch5_layers": [
        "{A. The Feeder Segment: Starts at the service provider’s Central Office (CO) and runs to a local neighborhood hub known as the Fiber Distribution Hub (FDH) or Primary Cross-Connect box. This segment uses high-core-count cables (often containing 48 to 144+ fibers) designed to carry aggregated data over long distances (up to 20 kilometers) without splitting.|"
         "A. The Feeder Segment: Connects the Central Office (CO) to the Fiber Distribution Hub (FDH). It uses heavy, high-fiber-count cables (48 to 144+ cores) to carry signals over long trunk routes (up to 20 km) without splitting.}",
        "{B. The Distribution Segment: Travels from the FDH to smaller street-level ODP (Optical Distribution Point) or FAT (Fiber Access Terminal) boxes. At the FDH, the feeder fibers are connected to splitters, and the split fibers branch out into the neighborhood using medium-core cables (12 to 24 fibers) along utility poles or underground conduits.|"
         "B. The Distribution Segment: Spans from the FDH to street-level boxes like the Optical Distribution Point (ODP). Feeder fibers are split at the FDH, and distribution cables (12 to 24 cores) run along streets on poles or in ducts.}",
        "{C. The Drop Segment: The final link that bridges the ODP/FAT on the street directly into the customer’s living room or office. This utilizes a Drop Cable, which is a highly specialized, lightweight, ruggedized fiber cable (usually containing only 1 or 2 fibers) engineered to survive tight bends and physical pulling.|"
         "C. The Drop Segment: The final stretch running from the ODP to the customer's ONT. It uses a single or dual-core drop cable designed with high bend tolerance (G.657 standard) to navigate tight corners inside home conduits.}"
    ],
    
    "ch5_hardware_intro": (
        "{An FTTH network relies on a strict handshake between active hardware (requiring power) and passive hardware (no power):|"
        "The architecture is built on a close cooperation between powered active components and non-powered passive components:|"
        "FTTH operations depend on a clear split between active and passive network elements:}"
    ),
    
    "ch5_active_hardware": [
        "{OLT (Optical Line Terminal): Installed at the Central Office (CO). It acts as the central 'brain' of the network, converting digital IP data from the backbone into laser pulses and scheduling traffic for thousands of subscribers.|"
         "OLT (Optical Line Terminal): The central switch situated at the Central Office. It translates backbone internet traffic into optical pulses and coordinates downstream/upstream transmission scheduling.}",
        "{ONT / ONU (Optical Network Terminal / Unit): Installed inside the subscriber’s home. It acts as the translator, receiving optical light signals and converting them back into standard electrical signals (Ethernet/Wi-Fi) for consumer devices.|"
         "ONT / ONU (Optical Network Terminal / Unit): The subscriber-end modem. It converts the incoming light signals from the drop cable into standard electrical Ethernet or Wi-Fi signals for household use.}"
    ],
    
    "ch5_passive_hardware": [
        "{Optical Splitters: The heart of PON. A passive glass prism component that takes a single incoming beam of light and splits it into multiple identical streams to serve multiple users. Standard split ratios are 1:8, 1:16, 1:32, or 1:64.|"
         "Optical Splitters: Passive glass components that divide a single input light wave into multiple output paths (e.g., 1:8, 1:16, 1:32) to feed multiple subscribers without power.}",
        "{ODF / FDH Hubs: Environmental enclosures or cabinets that house splices and splitters, protecting connections from water, dust, and temperature changes.|"
         "FDH / ODF Cabinets: Weatherproof enclosures hosting splitters and splice trays, securing connections against dust, water, and heat.}"
    ],
    
    # Chapter 6
    "ch6_coding_intro": (
        "{To safely identify individual fibers inside a multi-core cable, technicians use the industry-standard 12-color coding sequence. For cables with more than 12 fibers, the sequence repeats with a physical black tracer/stripe.|"
        "To identify individual fibers in high-core-count cables, the industry uses a standardized 12-color coding sequence (TIA-598-C). For larger cables, the color sequence repeats using a black stripe or tracer.|"
        "To manage multi-core cables without confusion, a standard 12-color sequence is followed. When core counts exceed 12, the color code is repeated with a colored tracer thread.}"
    ),
    
    "ch6_deployment_intro": (
        "{Before installation, technicians perform a comprehensive site survey consisting of several phases:|"
        "Prior to cable deployment, technicians conduct a site survey covering these steps:|"
        "The deployment process begins with a detailed site survey comprising:}"
    ),
    
    "ch6_deployment_steps": [
        "{Route Mapping: Finding the shortest, most efficient path from street FAT to house.|Route Mapping: Planning the shortest cable path from the street ODP to the customer premises.}",
        "{Structural Assessment: Identifying building entry points and optimal indoor ONT placement.|Structural Assessment: Finding entry points and deciding on the best indoor ONT location.}",
        "{Safety Check: Keeping clear of electrical mainlines to avoid physical interference.|Safety Check: Checking for power lines to maintain safe spacing and avoid electrical hazards.}",
        "{BOM Calculation: Generating the exact Bill of Materials (cables, clamps, rosettes).|BOM Calculation: Creating the Bill of Materials including clamps, drop cables, and wall outlets.}"
    ],
    
    "ch6_outdoor_routing": (
        "{Aerial Deployment: Fiber cables are strung between utility poles using tension/anchor clamps. Slack loops must be left at ends to accommodate weather-induced physical shifts.|"
        "Aerial Deployment: Drop wires are suspended between poles using drop clamps. Technicians leave slack loops to accommodate expansion and contraction from temperature changes.}"
        " {Underground Deployment: Fiber is pulled or blown through buried HDPE (High-Density Polyethylene) conduits for maximum protection against environmental hazards.|"
        "Underground Deployment: In suburban areas, fiber is pulled through buried protective HDPE ducts to shield it from excavation and weather damage.}"
    ),
    
    "ch6_indoor_termination": (
        "{The drop cable passes into the home and terminates inside an Access Terminal Box (ATB) or Fiber Rosette on the wall.|"
        "The fiber cable enters the home and is terminated at a wall-mounted fiber outlet or rosette box.}"
        " {A highly flexible, bend-insensitive patch cord (typically G.657 standard) connects the ATB to the ONT, preventing signal loss around tight corners.|"
        "A bend-insensitive patch cord (G.657 standard) is then run from the outlet to the ONT, allowing tight bends around walls without causing signal loss.}"
    ),
    
    "ch6_testing_intro": (
        "{FTTH operates over single-mode fiber using separate bidirectional wavelengths to avoid interference:|"
        "Single-mode fiber supports bidirectional traffic by using separate wavelengths for upstream and downstream data:|"
        "To prevent collisions on the single-core fiber, different wavelengths are used for upload and download:}"
    ),
    
    "ch6_wavelengths": [
        "{1490 nm: Downstream data/voice traffic (OLT to ONT).|1490 nm: Carries downstream internet and voice traffic from OLT to subscriber ONT.}",
        "{1310 nm: Upstream data upload traffic (ONT to OLT).|1310 nm: Used for upstream traffic uploads from ONT to the central OLT.}",
        "{1550 nm: Optional downstream video/TV overlay.|1550 nm: Allocated for downstream analog or digital TV overlays.}"
    ],
    
    "ch6_testing_params": [
        "{Optical Power Meter (OPM): Measures absolute light strength at the subscriber end. Acceptable operational range is between -15 dBm and -25 dBm. Readings below -27 dBm constitute an under-power fault.|"
         "Optical Power Meter (OPM): Used to measure the optical power level at the ONT. The normal range is -15 dBm to -25 dBm. Levels below -27 dBm indicate an attenuation fault.}",
        "{OTDR: Measures backscattered light to map the entire physical link and locate precise coordinates of cuts or defects.|"
         "OTDR (Optical Time Domain Reflectometer): Sends light pulses down the fiber to analyze backscatter, mapping splice points and finding the exact location of cable cuts.}"
    ],
    
    "ch6_troubleshoot_intro": (
        "{Field diagnostics rely heavily on the ONT hardware status LED combinations:|"
        "Technicians diagnose residential link faults by reading the status LEDs on the ONT:|"
        "ONT faceplate status LEDs provide primary diagnostic information during service calls:}"
    ),
    
    # Chapter 7
    "ch7_visit_intro": (
        "{As part of the internship in optical fiber communication, a technical visit was conducted to the BSNL Exchange office, Manjeri to gain practical exposure to the operation and management of fiber-optic communication networks.|"
        "To gain practical exposure to telecom systems, we visited the BSNL Telephone Exchange in Manjeri. This field visit provided a real-world look at central office operations.|"
        "A key part of our training was a technical visit to the BSNL exchange office at Manjeri. The visit allowed us to bridge classroom theory with large-scale telecom practices.}"
        " {The visit provided an opportunity to observe how telecommunication services are delivered from the exchange to end users through optical fiber infrastructure.|"
        "We observed the equipment used to deliver phone and broadband services to thousands of local subscribers via fiber networks.|"
        "This excursion let us trace the physical flow of data from central carrier routers to the local distribution loops.}"
    ),
    
    "ch7_observations": (
        "{During the visit, we observed different equipment used in the exchange, including the Optical Line Terminal (OLT), fiber distribution panels, and other networking devices. The officials explained how internet, voice, and other communication services are transmitted through optical fiber cables from the exchange to customers.|"
        "Technicians at the exchange demonstrated the OLT racks, optical distribution frames (ODF), and multi-fiber termination racks. They explained how incoming voice and data feeds are combined and routed onto fiber cores.|"
        "We inspected the active OLT chassis, patch panels, and backup battery systems. The staff explained the process of multiplexing and routing signals into local distribution loops.}"
        " {Behind the OLT, several backend devices are used for network management.|"
        "Behind the OLT line cards, several core network management systems are active:|"
        "The OLT works in tandem with key backend routing and authentication nodes:}"
        " {The BNG (Broadband Network Gateway) handles user authentication, IP address allocation, routing, and internet session management.|"
        "The Broadband Network Gateway (BNG) manages subscriber sessions, allocates dynamic/static IP addresses, and controls user bandwidth.|"
        "A Broadband Network Gateway (BNG) handles routing, authenticates user credentials, and controls access policies.}"
        " {The MNGN (Multiplay Converged packet access Networks) is a secure, carrier-grade packet transmission network deployed within the local exchange. It supports services such as FTTH broadband, leased lines, and enterprise connections over a common network infrastructure.|"
        "The MNGN (Multiplay Converged packet access Networks) acts as the packet transport layer, carrying FTTH data, voice, and business leased lines over a high-capacity ring network.|"
        "The MNGN platform provides carrier-grade packet transport, integrating FTTH broadband, IPTV, and business data links onto a unified network.}"
        " {The OLT delivers internet services to ONTs through optical fiber cables.|"
        "The OLT connects to customer ONTs via the optical distribution network.|"
        "Finally, the OLT transmits these combined services to customer ONTs over fiber loops.}"
    ),
    
    "ch7_visit_conclusion": (
        "{The visit provided practical knowledge about the working of a telecommunication exchange and helped us relate the theoretical concepts of optical fiber communication to real-world applications. It was a valuable learning experience that improved our understanding of modern fiber-optic communication systems.|"
        "This technical tour was highly educational, helping us visualize how OLTs and BNGs operate in a real carrier network. It successfully linked our classroom physics to modern telecom infrastructure.|"
        "In conclusion, the BSNL exchange visit offered indispensable practical insights. Seeing carrier-grade hardware helped us understand the scale of fiber networks and the complexity of modern broadband delivery.}"
    ),
    
    # Part 1 Conclusion
    "part1_conclusion": (
        "{In conclusion, this module has successfully detailed the comprehensive operational framework of modern high-speed telecommunications.|"
        "To summarize, this first section has covered the core architectural principles of modern fiber-optic communications.|"
        "In summary, this part of the training detailed the physics and engineering behind high-speed optical communications.}"
        " {Beginning with the core waveguiding physics of single-mode fibers, the report systematically evaluated how light pulses are propagated, attenuated, and structured within field-grade multi-core distribution cables.|"
        "Starting with wave propagation in single-mode cores, we analyzed how light signals are guided, attenuated, and protected in multi-core cables.|"
        "We studied light propagation in single-mode cores and analyzed fiber structure and attenuation in distribution cables.}"
        " {The rigorous analysis of multi-stage passive optical splitters and mathematical power link budgeting demonstrated how a network ensures operational durability while supporting thousands of subscribers.|"
        "Our study of optical splitters and link budget calculations showed how networks maintain signal strength for thousands of users.|"
        "Calculations for splitters and link budgets demonstrated how signal integrity is maintained over a passive network.}"
        " {Through practical field training under Bfone Fibernet, standard industry protocols—including precision fusion splicing, standard color coding sequence alignment, and advanced OTDR-based diagnostic fault-finding—were thoroughly mastered.|"
        "Training with Bfone Fibernet provided hands-on experience in fusion splicing, fiber color coding, and diagnosing faults with OTDRs.|"
        "Practical exercises at Bfone Fibernet allowed us to master fusion splicing, color code identification, and OTDR troubleshooting.}"
        " {Furthermore, the field study at the BSNL Exchange Office in Manjeri provided vital structural insight into macro-scale network topology, illustrating the exact handshake between hardware nodes like OLTs, BNG gateways, and consumer-end ONTs.|"
        "Additionally, the BSNL Exchange visit illustrated macro-scale network architecture, showing the interaction between OLTs, BNG routers, and ONTs.|"
        "The BSNL exchange visit clarified wide-area network design, showing how OLTs, BNG nodes, and customer ONTs communicate.}"
        " {Ultimately, this module confirmed that efficient FTTH architectures require a precise balance between strict engineering mathematics and rigorous field deployment standards to maintain continuous, high-performance gigabit connectivity.|"
        "Ultimately, we learned that successful FTTH networks rely on a balance of mathematical design and careful field installation to deliver reliable gigabit speeds.|"
        "Ultimately, this section showed that reliable gigabit broadband requires both accurate math and high-quality field installation.}"
    ),
    
    # Part 2 Intro
    "part2_intro": (
        "{The integration of specialized electro-mechanical hardware remains a vital pillar of the modern domestic environment.|"
        "Electro-mechanical appliances are essential to the comfort and function of modern households.|"
        "Electrical appliances form the core operational infrastructure of the modern home.}"
        " {From electrothermal conversion units to complex induction power inverters and single-phase electromagnetic distribution motors, these household systems represent direct physical applications of fundamental thermodynamic and electromagnetic theories.|"
        "Whether using heating elements, induction coils, or single-phase motors, these appliances are real-world applications of thermodynamics and electromagnetism.|"
        "Devices utilizing resistive heating, induction cooking, or single-phase induction motors apply core principles of thermodynamics and electromagnetism.}"
        " {This second module of the report provides a rigorous technical breakdown of consumer appliance electronics, diagnostic logic, and preventive maintenance protocols executed during the industrial training.|"
        "This section of the report documents the technical details, troubleshooting steps, and maintenance practices studied during our training.|"
        "This second part focuses on the electrical systems, diagnostics, and repair procedures learned during the hands-on sessions.}"
        " {The objective of this module is to move beyond simple component replacement to establish a thorough engineering understanding of circuit safety and appliance operations.|"
        "Our objective was to understand the physics of appliance operation and safety systems rather than just replacing parts.|"
        "The goal was to build a solid diagnostic mindset based on electrical theory rather than basic parts-swapping.}"
        " {The chapters ahead map out essential circuit structures (series vs. parallel wiring configurations) and structural protection systems—such as chassis ground earthing, Miniature Circuit Breakers (MCBs), and high-sensitivity Residual Current Circuit Breakers (RCCBs)—designed to mitigate short circuits and hazardous current leakage.|"
        "The following chapters cover domestic wiring, series and parallel circuits, and safety devices like grounding, MCBs, and RCCBs that protect against shocks and short circuits.|"
        "We discuss basic circuit laws, household wiring layouts, and safety hardware including grounding, circuit breakers (MCBs), and leakage breakers (RCCBs).}"
        " {Following this safety framework, the module provides an isolated component breakdown, operational analysis, and troubleshooting matrix for seven core appliances: the electric iron, induction cooker, mixer grinder, storage water geyser, ceiling fan, wall fan, and centrifugal water pump.|"
        "Next, we provide component analyses and troubleshooting steps for seven home appliances: the iron, induction stove, mixer, geyser, ceiling fan, wall fan, and water pump.|"
        "We then detail the construction and troubleshooting of seven appliances: the electric iron, induction cooker, mixer grinder, water geyser, ceiling fan, wall fan, and utility pump.}"
        " {This foundational mechanical study finishes with applied practical audits covering consumer load accounting and electrical charge tracking.|"
        "Finally, this module presents practical math problems on electricity auditing and electrical charge calculations.|"
        "This section concludes with practical calculations on household electricity auditing and charge transport.}"
    ),
    
    # Chapter 8 Intro
    "ch8_intro": (
        "{The modern domestic environment relies entirely on the seamless operation of electrical appliances. From food preparation to climate control and water management, these devices have transitioned from luxuries to everyday essentials. However, continuous operation inevitably leads to mechanical wear, insulation degradation, and electrical faults.|"
        "Household appliances are central to modern life, running constantly to support cooking, ventilation, and water supply. Over time, heavy use causes mechanical wear, insulation breakdowns, and electrical faults.|"
        "Modern homes depend on a variety of electrical appliances. Because these systems run daily, they eventually suffer from bearing wear, insulation aging, and wiring faults.}"
        " {This internship was undertaken to bridge the gap between abstract electrical theory and hands-on diagnostic engineering. The training structured under this module focused on developing a core competency in domestic wiring systems, understanding electrical safety protocols, and mastering the systematic teardown, repair, and preventive maintenance of seven foundational household appliances.|"
        "This training was designed to connect school physics with hands-on repair work. We focused on mastering domestic wiring, electrical safety, and the disassembly and repair of seven common household appliances.|"
        "This module was completed to apply electrical theory to practical repair. The course covered safety protocols, wiring layouts, and the step-by-step repair of seven core home appliances.}"
        " {The primary objective was not merely to fix broken devices, but to understand the physics governing their operation—such as electrothermal conversion, electromagnetism, and fluid dynamics—while strictly adhering to industrial safety standards.|"
        "Our goal was to analyze the physics of these appliances—like resistive heating, electromagnetism, and motor action—while practicing safe work habits.|"
        "The focus was on understanding operational physics—such as Joule heating, magnetic fields, and fluid flow—while strictly following safety rules.}"
    ),
    
    # Chapter 8.2 Overview
    "ch8_overview": (
        "{Before working on any appliance, a solid foundation in circuit behavior and safety infrastructure was established.|"
        "Prior to starting repairs, we studied basic circuit behaviors and safety components:|"
        "A clear understanding of circuit principles and safety gear was established before handling live circuits:}"
    ),
    
    "ch8_behaviors": [
        "{Ohm's Law & Power Equation: Diagnostics rely on Ohm's Law (V = IR) and the Power formula (P = VI = I^2R). These allow us to calculate expected resistance and identify open or short circuits.|"
         "Ohm's Law & Power: We use V = IR and P = VI to calculate normal resistance values, allowing us to find short circuits and open windings during testing.}",
        "{Series Connections: Current remains constant; voltage divides. Used in safety switches, fuses, and thermostats.|"
         "Series Wiring: Current is constant while voltage drops. Used for safety switches, fuses, and thermostats to interrupt current flow.}",
        "{Parallel Connections: Voltage remains constant; current divides. Used in domestic house wiring so that the failure of one appliance does not shut off others.|"
         "Parallel Wiring: Voltage remains constant while current divides. Standard for home wiring to ensure appliances operate independently.}"
    ],
    
    "ch8_protection": [
        "{Earthing (Grounding): Connects the metallic chassis of an appliance directly to the earth. In case of insulation failure where a live wire touches the metal body, current diverts safely to the ground instead of passing through a user.|"
         "Earthing: Connects the metal body of an appliance to the ground. If a hot wire touches the chassis, current flows to earth, preventing shock to the user.}",
        "{Fuse / MCB (Miniature Circuit Breaker): Protects the circuit from overcurrent and short circuits by breaking the circuit when current exceeds safe thresholds.|"
         "Fuses & MCBs: Devices that open the circuit during short circuits or overloads, protecting wiring from overheating.}",
        "{ELCB / RCCB (Residual Current Circuit Breaker): Detects minute current leakages (as low as 30mA) escaping to ground by comparing hot and neutral currents, tripping instantly if an imbalance is found.|"
         "RCCB / ELCB: Detects small leakages (30mA) to ground by comparing live and neutral currents, tripping instantly to prevent severe shock.}"
    ],
    
    # Chapter 9.1 Electric Iron
    "ch9_iron_principle": (
        "{An electric iron works on the principle of the Joule’s Heating Effect of Electric Current. When an electric current passes through a high-resistance conductor (heating element), it generates thermal energy (H = I 2 Rt).|"
        "The electric iron operates on Joule's Heating Effect. Current flowing through a high-resistance heating element generates heat proportional to the resistance and square of the current (H = I^2Rt).|"
        "An electric iron utilizes resistive heating (Joule's Effect). Passing current through a high-resistance heating element converts electrical energy into heat (H = I^2Rt).}"
        " {Temperature regulation is achieved via a bimetallic strip thermostat. The strip consists of two different metals bonded together with distinct coefficients of thermal expansion. As the iron heats up, one metal expands faster than the other, causing the strip to bend and open the electrical contacts, breaking the circuit. Once it cools down, it straightens, closes the contact, and heat generation resumes.|"
        "A bimetallic thermostat regulates the temperature. It uses two bonded metals with different expansion rates. Heating causes the strip to bend, opening the contacts and cutting power. As it cools, the strip straightens to restore the connection.|"
        "A bimetallic strip thermostat controls the heat. Since the two bonded metals expand at different rates, heating bends the strip to open contacts and cut the circuit. Cooling resets the strip, restarting the heating cycle.}"
    ),
    
    "ch9_iron_components": [
        "{Soleplate: The heavy, polished aluminum or cast-iron base that transfers heat directly to the clothes.|Soleplate: A smooth, heavy metal plate (aluminum/cast iron) that transfers heat to the fabric.}",
        "{Heating Element: A ribbon of Nichrome wound around a mica sheet insulated to prevent electric shock while maximizing heat transfer.|Heating Element: A nichrome wire ribbon wrapped in mica sheets to insulate the live voltage while conducting heat.}",
        "{Bimetallic Thermostat: The temperature control mechanism equipped with an adjustable knob to set specific heat thresholds.|Bimetallic Thermostat: The temperature regulator with an adjustable dial that sets the contact gap.}",
        "{Thermal Fuse: A backup safety device that permanently melts and opens the circuit if the thermostat fails.|Thermal Fuse: A safety fuse that melts permanently if temperatures exceed safe limits due to thermostat failure.}"
    ],
    
    "ch9_iron_conclusion": (
        "{Through the study of the electric iron, the practical application of electrothermal conversion and thermal feedback loops via bimetallic components was fully understood. Testing this device highlighted how crucial thermal fuses are in preventing catastrophic overheating.|"
        "Studying the iron showed the practical side of Joule heating and thermal feedback loops. Working on it highlighted the role of thermal fuses in protecting against fire hazards.|"
        "The iron diagnostics clarified resistive heating and bimetallic thermostat feedback. Testing showed the importance of secondary thermal fuses for safety.}"
    ),
    
    # Chapter 9.2 Induction Cooker
    "ch9_induction_principle": (
        "{Unlike traditional cooking methods that use thermal conduction, an induction cooker operates on the principles of Electromagnetism and Eddy Currents.|"
        "Unlike standard stoves that use heat conduction, induction cooktops operate using electromagnetic induction and eddy currents.|"
        "Induction cooking replaces thermal conduction with electromagnetic induction and localized eddy currents.}"
        " {The appliance takes 50Hz AC power and converts it into a high-frequency (20kHz to 40kHz) alternating current using an internal inverter circuit. This high-frequency current passes through a copper induction coil beneath the ceramic plate, creating a dynamic, rapidly alternating magnetic field. When a ferromagnetic vessel is placed on top, this magnetic field induces circulating eddy currents within the base of the pan. Because the pan has electrical resistance, these currents generate heat directly inside the cookware itself, keeping the stovetop relatively cool.|"
        "The stove converts 50Hz mains power into high-frequency AC (20-40kHz) via a solid-state inverter. This current flows through a copper coil beneath the glass, generating a rapid alternating magnetic field. A steel pan placed on top absorbs this field, creating eddy currents in its base. Due to the metal's electrical resistance, heat is generated directly inside the pan while the cooktop surface remains cool.|"
        "An internal inverter converts 50Hz AC mains into high-frequency AC (20-40kHz). This current flows through an induction coil to generate an alternating magnetic field. Placing a ferromagnetic pan on the glass induces eddy currents in the pan's base. The pan's electrical resistance causes it to heat up directly, leaving the glass top relatively cool.}"
    ),
    
    "ch9_induction_components": [
        "{Induction Coil: A flat, spirally wound copper coil that generates the alternating magnetic field.|Induction Coil: A flat, spiral copper coil that creates the alternating magnetic field.}",
        "{IGBT (Insulated Gate Bipolar Transistor): The high-speed electronic switch that modulates power and creates the high-frequency current.|IGBT: A high-power semiconductor switch that drives the high-frequency inverter circuit.}",
        "{Main PCB & Microcontroller: The 'brain' that monitors user inputs, manages power delivery, and reads sensor data.|Main PCB & Control Unit: The controller that processes settings, manages power level switching, and monitors safety sensors.}",
        "{Cooling Fan & RTD (Resistance Temperature Detector): Critical elements for heat dissipation and monitoring pan temperatures to prevent dry boiling.|Fan & Temperature Sensor (RTD): A cooling fan and thermistor that prevent overheating and detect boil-dry conditions.}"
    ],
    
    "ch9_induction_conclusion": (
        "{The induction cooker diagnostics provided essential insights into solid-state electronics and high-frequency power switching. It demonstrated how magnetic fields can be manipulated for localized heating, emphasizing the need for robust PCB-level troubleshooting.|"
        "Induction stove troubleshooting offered great experience with solid-state inverters and magnetic heating. It showed the importance of tracing faults at the board component level.|"
        "Diagnosing induction cookers provided valuable knowledge of high-frequency power electronics. It showed how magnetic fields can be used for clean heating and highlighted PCB-level testing.}"
    ),
    
    # Chapter 9.3 Mixer Grinder
    "ch9_mixer_principle": (
        "{The mixer grinder operates on electromagnetic mechanical conversion using an AC Universal Motor. A universal motor is a series-wound motor designed to run on either AC or DC power. When voltage is applied, current flows through both the stator (field windings) and the rotor (armature windings) via carbon brushes. This creates opposing magnetic fields, producing a high starting torque and high rotational speeds (up to 20,000 RPM), which are necessary for chopping, blending, and grinding food materials.|"
        "Mixer grinders use an AC Universal Motor to convert electrical energy into rotation. The universal motor is series-wound and runs on either AC or DC. Current flows through the stator field coils and the rotor windings through carbon brushes. The resulting magnetic fields produce high starting torque and speeds up to 20,000 RPM, ideal for grinding and blending.|"
        "The mixer grinder is powered by an AC Universal Motor. This series-wound motor operates on both AC and DC. Current passes through the stator and rotor coils via carbon brushes, creating opposing magnetic fields. This generates the high torque and speeds (up to 20,000 RPM) needed to grind and blend food ingredients.}"
    ),
    
    "ch9_mixer_components": [
        "{Stator & Rotor (Armature): The fixed and rotating electromagnetic components that generate mechanical torque.|Stator & Armature: The stationary field coils and rotating core that convert electrical energy to torque.}",
        "{Commutator & Carbon Brushes: The assembly that transfers electrical current from the stationary wires to the rotating armature.|Commutator & Brushes: Sliding carbon contacts that deliver current to the rotating commutator bars.}"
    ],
    
    # Chapter 9.3.1 Ceiling Fan
    "ch9_ceiling_fan_principle": (
        "{A ceiling fan operates on the principle of a Single-Phase Induction Motor (Permanent Split Capacitor Motor). Single-phase AC power cannot generate a rotating magnetic field on its own to start a motor. To solve this, the motor has two separate windings: a Starting Winding and a Running Winding. A capacitor is wired in series with the starting winding to create a 90° electrical phase shift in the current. This phase shift creates a simulated rotating magnetic field, which induces a current in the squirrel-cage rotor, generating the torque needed to turn the fan blades.|"
        "Ceiling fans utilize a Single-Phase Permanent Split Capacitor Induction Motor. Since single-phase AC cannot self-start a motor, the stator features main (running) and auxiliary (starting) windings. A start/run capacitor in series with the starting winding shifts the current phase by 90°. This phase difference creates a rotating magnetic field, inducing current in the rotor and turning the fan blades.|"
        "The ceiling fan uses a Single-Phase Permanent Split Capacitor Induction Motor. A single-phase source lacks a starting torque, so the motor uses starting and running windings. Connecting a capacitor in series with the starting winding creates a 90-degree phase shift. This simulates a rotating magnetic field, inducing torque in the rotor to rotate the fan.}"
    ),
    
    "ch9_ceiling_fan_components": [
        "{Stator & Rotor: Stationary inner core with starting/running windings and the rotating outer casing.|Stator & Rotor: An inner stationary core with copper windings and an outer rotating steel shell.}",
        "{Run/Start Capacitor: Typically 2.25µF to 2.5µF capacitor used to split the phase and start rotation.|Run Capacitor: A 2.25 to 2.5 microfarad capacitor that creates the phase shift to start the motor.}",
        "{Ball Bearings: Precision bearings that reduce mechanical friction, ensuring smooth and quiet operation.|Ball Bearings: Dual bearings that support the rotor shell, minimizing noise and friction.}",
        "{Down-Rod Assembly: Structural hardware used to safely suspend the fan from the ceiling.|Down-Rod: The steel pipe assembly that suspends the fan safely from the ceiling hanger.}"
    ],
    
    "ch9_ceiling_fan_conclusion": (
        "{Working with ceiling fans clarified the theory of phase splitting in single-phase induction systems. The practical experience emphasized the diagnostic process of isolating electrical winding failures from mechanical bearing resistance.|"
        "Repairing ceiling fans helped us understand phase-splitting in single-phase motors. The troubleshooting process showed how to distinguish winding issues from mechanical bearing wear.|"
        "Ceiling fan repair sessions demonstrated phase separation in single-phase induction. We learned how to isolate electrical winding faults from mechanical bearing seizure.}"
    ),
    
    # Chapter 9.3.2 Wall Fan
    "ch9_wall_fan_principle": (
        "{A wall fan operates similarly to a ceiling fan, using a Single-Phase Permanent Split Capacitor Induction Motor, but includes specialized mechanisms for targeted directional airflow and oscillation. While the motor creates mechanical rotation using a starting winding, running winding, and a capacitor to shift the current phase, it also drives a mechanical synchronous link gear system or an independent secondary micro-motor to achieve horizontal oscillation (swiveling back and forth). Speed regulation is managed either via a multi-tapped transformer winding or an electronic TRIAC circuit on a PCB, controlling voltage delivery to the motor.|"
        "Wall fans also use a single-phase capacitor induction motor but add mechanics for oscillation. The main motor drives the blades, while a mechanical gear linkage or a small secondary motor rotates the fan assembly side-to-side. Fan speed is controlled by switching between motor winding taps or using a TRIAC circuit to vary voltage.|"
        "The wall fan runs on a single-phase capacitor motor, incorporating swiveling oscillation. The motor turns the blades while a gear train or secondary micro-motor sweeps the fan head. Speed adjustment is achieved by selecting different winding taps or through a TRIAC speed controller on the PCB.}"
    ),
    
    "ch9_wall_fan_components": [
        "{Fan Blades and Guard: Aerodynamically pitched plastic or metal blades protected by a wire mesh safety cage.|Blades & Grille: Curved plastic/metal blades protected by a wire mesh safety guard.}",
        "{Oscillation Gear Assembly / Clutch Knob: A mechanical gear train connected to the rotor shaft that translates high-speed rotation into slow, wide-angle swiveling motion.|Oscillation Gearbox: A reduction gear assembly that converts high-speed motor rotation into a slow swiveling motion.}",
        "{Speed Control Switch (Pull-Cord / Push-Button / Remote PCB): Mechanisms to toggle between different motor speed taps or control electronic voltage regulation.|Speed Selector: A mechanical rotary switch, pull-cord, or electronic circuit that adjusts voltage to regulate speed.}",
        "{Thermal Cut-Off (TCO): A compact thermal fuse embedded directly inside the motor windings to protect the motor from burning out if the blades get obstructed or jammed.|Thermal Cut-Off (TCO): A thermal fuse inside the stator coils that cuts power if the motor overheats due to a jam.}"
    ],
    
    "ch9_wall_fan_conclusion": (
        "{The analysis of the wall fan highlighted how structural mechanisms (linkage gears) integrate with electrical induction motors. It offered an excellent case study on thermal protection embedded within motor windings and the diagnostic tracking of mechanical oscillation failures.|"
        "Working on the wall fan showed how mechanical gearboxes connect to electrical motors. It was a good lesson in motor winding safety fuses and fixing mechanical oscillation failures.|"
        "The wall fan provided an study on mechanical linkages combined with induction motors. Diagnostics focused on winding thermal fuses and gear alignment issues.}"
    ),
    
    # Chapter 10 Outcomes
    "ch10_outcomes": [
        "{Safety Instinct Diagnostics: Developed a strict protocol-first mindset—always verifying isolation with a neon tester, utilizing insulation mats, and ensuring appropriate grounding before applying mains voltage.|"
         "Safety First Mentality: Learned to always check for live voltage using a test pen, work on rubber mats, and verify ground lines before powering up devices.}",
        "{Systematic Fault Profiling: Shifted away from random guesswork to structured troubleshooting: tracing faults from the source point (plug/cord) through protection systems (OLPs/fuses) to control systems and finally the load.|"
         "Structured Troubleshooting: Mastered the process of tracing faults along the circuit path, starting from the plug, checking fuses, and then testing switches and windings.}",
        "{Instrument Competency: Attained fluid precision in utilizing digital multimeters to measure resistance drops, AC loop voltages, and verifying open/short circuits.|"
         "Multimeter Proficiency: Gained hands-on experience using multimeters to test continuity, winding resistances, and checking live AC voltages safely.}"
    ],
    
    # Chapter 11.1
    "ch11_audit_intro": (
        "{To calculate household power consumption, energy is tracked in kilowatt-hours (kWh), where 1 Unit = 1 kWh.|"
        "Domestic electricity usage is measured in kilowatt-hours (kWh), with one unit of electricity equal to 1 kWh.|"
        "Electricity billing is based on energy consumed in kilowatt-hours (kWh), where 1 Unit represents 1 kWh.}"
    ),
    
    "ch11_audit_problem": (
        "{Determine the exact 30-day billable consumption for a household running two 40W tube lights for 6 hours daily, three 65W fans for 8 hours daily, and separate appliances drawing 150W for 2 hours daily.|"
        "Calculate the 30-day energy consumption for a home operating two 40W tubes for 6 hours/day, three 65W fans for 8 hours/day, and auxiliary loads of 150W for 2 hours/day.|"
        "Find the total energy consumed in a 30-day month by a home running two 40W tube lights for 6 hours a day, three 65W ceiling fans for 8 hours a day, and other appliances drawing 150W for 2 hours daily.}"
    ),
    
    # Chapter 11.2
    "ch11_charge_problem": (
        "{A 230V system consumes a total of 8 MJ of energy during operation. Determine the absolute electrical charge that moved through the circuit.|"
        "An appliance connected to a 230V line consumes 8 Megajoules (MJ) of energy. Calculate the total electric charge that passed through the system.|"
        "Determine the total charge transported through a 230V electrical system that consumes 8 MJ of energy during its operating cycle.}"
    ),
    
    # Part 2 Conclusion
    "part2_conclusion": (
        "{In conclusion, this second module has established a robust technical bridge between undergraduate physics and field-level electrical repair logic.|"
        "In summary, this section connected classroom physics with real-world electrical troubleshooting.|"
        "To conclude, this second part linked academic physics concepts with practical appliance diagnostics.}"
        " {By systematically mapping out internal component frameworks across seven fundamental consumer appliances, the training provided deep insights into everyday electrical systems.|"
        "Analyzing the construction of seven common appliances gave us a thorough understanding of household electrical systems.|"
        "Studying the components and wiring of seven core appliances provided valuable insight into domestic electrical layouts.}"
        " {Tracing diagnostic signatures—such as a bimetallic contact opening in a thermal loop or a split-phase capacitor drop in an induction motor—showed how equipment behaviors can be accurately tracked using standard multi-meter analysis.|"
        "We learned to trace faults, such as open bimetallic contacts in irons or degraded start capacitors in fans, using multimeters.|"
        "Checking electrical behaviors, like thermostat switching in irons or capacitor values in induction motors, showed the value of multimeter testing.}"
        " {The successful implementation of practical testing logic highlighted how embedded safety devices like thermal cut-offs (TCOs), overload protectors (OLPs), and dual-stage pressure relief valves are critical for preventing motor burnouts and protecting users.|"
        "Hands-on practice showed how safety elements like thermal fuses (TCOs) and overload switches (OLPs) prevent fires and protect equipment.|"
        "The exercises emphasized the importance of safety devices like thermal cut-offs (TCOs) and overload protectors (OLPs) in preventing damage.}"
        " {Additionally, the quantitative practical math problems confirmed that accurate load auditing and tracking energy changes are key to managing household electricity efficiently.|"
        "Furthermore, calculating energy consumption and charge transfer helped us understand power management.|"
        "Additionally, completing energy audits and charge calculations showed how to monitor power consumption.}"
        " {Ultimately, the mechanical repair skills and systemic troubleshooting methods gained during this maintenance module form a critical practical toolkit, ensuring that home environments remain completely safe and operationally productive.|"
        "Ultimately, the troubleshooting methods and repair skills learned in this course provide a valuable practical toolkit for maintaining home appliances safely.|"
        "Ultimately, the hands-on repair skills and diagnostic logic learned during this course form a valuable toolkit for electrical maintenance.}"
    )
}
