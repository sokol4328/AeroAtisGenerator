const notamData = {
  subject: {
    facilities: [
      {
        tag: "FA",
        name: "AERODROME",
      },
      {
        tag: "FG",
        name: "GROUND MOVEMENT CONTROL",
      },
      {
        tag: "FH",
        name: "HELICOPTER ALIGHTING AREA",
      },
      {
        tag: "FM",
        name: "MET",
      },
      {
        tag: "FP",
        name: "HELIPORT/HELI LANDING SITE",
      },
      {
        tag: "FU",
        name: "FUEL",
      },
    ],
    movement_and_landing_area: [
      {
        tag: "MA",
        name: "MOVEMENT AREA",
      },
      {
        tag: "MD",
        name: "DECLARED DISTANCES",
      },
      {
        tag: "MK",
        name: "PARKING AREA",
      },
      {
        tag: "MN",
        name: "APRON",
      },
      {
        tag: "MP",
        name: "AIRCRAFT STAND",
      },
      {
        tag: "MR",
        name: "RUNWAY",
      },
      {
        tag: "MU",
        name: "RUNWAY TURNING BAY",
      },
      {
        tag: "MX",
        name: "TAXIWAY",
      },
    ],
    lighting_facilities: [
      {
        tag: "LP",
        name: "PAPI",
      },
      {
        tag: "LR",
        name: "LANDING AREA LIGHTING",
      },
    ],
    communications_and_radar_facilities: [
      {
        tag: "CA",
        name: "A/G (FREQUENCY)",
      },
      {
        tag: "CD",
        name: "CPDLC",
      },
      {
        tag: "CP",
        name: "PAR",
      },
      {
        tag: "CS",
        name: "SSR",
      },
    ],
    instrument_landing_systems: [
      {
        tag: "IC",
        name: "ILS",
      },
      {
        tag: "ID",
        name: "DME ASSOC. WITH ILS",
      },
      {
        tag: "IG",
        name: "ILS GLIDE PATH",
      },
      {
        tag: "IL",
        name: "ILS LOCALISER",
      },
      {
        tag: "IN",
        name: "LOCALISER",
      },
    ],
    navigation_facilities: [
      {
        tag: "NA",
        name: "ALL RADIO NAV. FACILITIES",
      },
      {
        tag: "NB",
        name: "NDB",
      },
      {
        tag: "ND",
        name: "DME",
      },
      {
        tag: "NM",
        name: "VOR/DMR",
      },
      {
        tag: "NV",
        name: "VOR",
      },
      {
        tag: "NX",
        name: "DF/VDF",
      },
    ],
    airspace: [
      {
        tag: "AA",
        name: "MINIMUM ALT",
      },
      {
        tag: "AC",
        name: "CTR",
      },
      {
        tag: "AD",
        name: "AIR DEFENCE IDENTIFICATION ZONE",
      },
      {
        tag: "AE",
        name: "CTA",
      },
      {
        tag: "AF",
        name: "FIR",
      },
      {
        tag: "AH",
        name: "UPPER CONTROL AREA",
      },
      {
        tag: "AL",
        name: "MINIMUM USABLE FL",
      },
      {
        tag: "AP",
        name: "REPORTING POINT",
      },
      {
        tag: "AR",
        name: "ATS ROUTE",
      },
      {
        tag: "AT",
        name: "TMA",
      },
      {
        tag: "AX",
        name: "SIGNIFICANT POINT",
      },
      {
        tag: "AZ",
        name: "ATZ & MATZ",
      },
    ],
    procedures: [
      {
        tag: "PA",
        name: "STAR",
      },
      {
        tag: "PD",
        name: "SID",
      },
      {
        tag: "PH",
        name: "HOLDING PROCEDURE",
      },
      {
        tag: "PL",
        name: "FPL PROCESSING",
      },
      {
        tag: "PR",
        name: "RADIO COMMUNICATION PROCEDURE",
      },
      {
        tag: "PT",
        name: "TA OR TL",
      },
      {
        tag: "PU",
        name: "MISSED APCH PROCEDURE",
      },
      {
        tag: "PX",
        name: "MINIMUM HOLDING ALTITUDE",
      },
    ],
    restrictions: [
      {
        tag: "RA",
        name: "AIRSPACE RESERVATION",
      },
      {
        tag: "RD",
        name: "DANGER AREA",
      },
      {
        tag: "RO",
        name: "MIL AIRCRAFT SHALL AVOID",
      },
      {
        tag: "RM",
        name: "MILITARY OPERATING AREA",
      },
      {
        tag: "RP",
        name: "PROHIBITED AREA",
      },
      {
        tag: "RR",
        name: "RESTRICTED AREA",
      },
      {
        tag: "RT",
        name: "TEMPORARY RESTRICTED AREA",
      },
    ],
    services: [
      {
        tag: "SC",
        name: "AREA CONTROL CENTRE",
      },
      {
        tag: "SE",
        name: "LARS",
      },
      {
        tag: "SF",
        name: "AFIS",
      },
      {
        tag: "SP",
        name: "APPROACH CONTROL",
      },
      {
        tag: "ST",
        name: "TOWER",
      },
    ],
    warnings: [
      {
        tag: "WA",
        name: "AIR DISPLAY",
      },
      {
        tag: "WB",
        name: "AEROBATICS",
      },
      {
        tag: "WC",
        name: "CAPTIVE BALLOON & KITES",
      },
      {
        tag: "WD",
        name: "DEMOLITION OF EXPLOSIVES",
      },
      {
        tag: "WE",
        name: "EXERCISE",
      },
      {
        tag: "WF",
        name: "AIR TO AIR REFUELING",
      },
      {
        tag: "WG",
        name: "GLIDING",
      },
      {
        tag: "WM",
        name: "MISSILE, GUN, OR ROCKET FIRING",
      },
      {
        tag: "WO",
        name: "LASER EMISSIONS & DISPLAYS",
      },
      {
        tag: "WP",
        name: "PARACHUTE JUMPING",
      },
      {
        tag: "WS",
        name: "BURNING OR BLOWING GAS",
      },
      {
        tag: "WT",
        name: "MASS MOVEMENT OF AIRCRAFT",
      },
      {
        tag: "WU",
        name: "UAS & MODEL AIRCRAFT",
      },
      {
        tag: "WV",
        name: "FORMATION FLIGHT (RED ARROWS)",
      },
      {
        tag: "WZ",
        name: "FIREWORKS",
      },
    ],
    other: [
      {
        tag: "OB",
        name: "OBSTACLE",
      },
      {
        tag: "XX",
        name: "PLAIN LANGUAGE",
      },
    ],
  },
  condition: [
    {
      tag: "AD",
      name: "AVAILABLE FOR DAY OPS",
    },
    { tag: "AG", name: "AWAITING FLIGHT CHECK" },
    { tag: "AH", name: "HOURS OF OPS/SERVICE" },
    { tag: "AK", name: "RESUMED NORMAL OPS" },
    { tag: "AL", name: "OPERATING SUBJECT TO PREVIOUS CONDITION" },
    { tag: "AM", name: "MILITARY OPS ONLY" },
    { tag: "AN", name: "AVAIL FOR NIGHT OPS" },
    { tag: "AO", name: "OPERATIONAL" },
    { tag: "AR", name: "AVAILABLE ON REQUEST" },
    { tag: "AS", name: "OUT OF SERVICE" },
    { tag: "AU", name: "NOT AVAILABLE" },
    { tag: "AW", name: "COMPLETELY WITHDRAWN" },
    { tag: "CA", name: "ACTIVATED" },
    { tag: "CC", name: "COMPLETED" },
    { tag: "CD", name: "DEACTIVATED" },
    { tag: "CE", name: "ERECTED" },
    { tag: "CF", name: "FREQUENCY CHANGED" },
    { tag: "CG", name: "DOWNGRADED TO" },
    { tag: "CH", name: "CHANGED" },
    { tag: "CI", name: "IDENTIFICATION/CALLSIGN CHANGED" },
    { tag: "CR", name: "TEMPORARILY REPLACED BY" },
    { tag: "CS", name: "INSTALLED" },
    { tag: "CT", name: "ON TEST DO NOT USE" },
    { tag: "HW", name: "WORK IN PROGRESS" },
    { tag: "LC", name: "CLOSED" },
    { tag: "LG", name: "OPERATING WITHOUT IDENTIFICATION" },
    { tag: "LI", name: "CLOSED TO IFR OPS" },
    { tag: "LL", name: "USEABLE LENGTH/WIDTH" },
    { tag: "LN", name: "CLOSED TO NIGHT OPS" },
    { tag: "LP", name: "PROHIBITED" },
    { tag: "LR", name: "AIRCRAFT RESTRICTED TO RWY/TWY" },
    { tag: "LS", name: "SUBJECT TO INTERRUPTION" },
    { tag: "LT", name: "LIMITED" },
    { tag: "LV", name: "CLOSED TO VFR OPS" },
    { tag: "LW", name: "WILL TAKE PLACE" },
    { tag: "LX", name: "CAUTION" },
    { tag: "XX", name: "PLAIN LANGUAGE"}
  ],
};
