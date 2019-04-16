export const shoulderOptions = [
  { value: 'overheadPress', label: 'Overhead Press' },
  { value: 'seatedDumbbellPress', label: 'Seated Dumbbell Press' },
  { value: 'lateralRaise', label: 'Lateral Raise' },
  { value: 'frontDumbbellRaise', label: 'Front Dumbbell Raise' },
  { value: 'cableFacePull', label: 'Cable Face Pull' }
];

export const tricepsOptions = [
  { value: 'cablePushDown', label: 'Cable Push Down' },
  { value: 'skullCrusher', label: 'Skullcrusher' },
  { value: 'closeGripBenchPress', label: 'Close Grip Bench Press' },
  { value: 'dumbbellTricepsExtension', label: 'Dumbell Triceps Extension' },
  { value: 'overheadCableExtension', label: 'Overhead Cable Extension' }
];

export const bicepsOptions = [
  { value: 'barbellCurl', label: 'Barbell Curl' },
  { value: 'dumbbellCurl', label: 'Dumbell Curl' },
  { value: 'hammerCurl', label: 'Hammer Curl' },
  { value: 'reverseCurl', label: 'Reverse Curl' },
  { value: 'preacherCurl', label: 'Preacher Curl' },
  { value: 'cableCurl', label: 'Cable Curl' }
];

export const chestOptions = [
  { value: 'benchPress', label: 'Bench Press' },
  { value: 'dumbbellBenchPress', label: 'Dumbbell Bench Press' },
  { value: 'inclineBenchPress', label: 'Incline Bench Press' },
  { value: 'inclineDumbbellPress', label: 'Incline Dumbbell Press' },
  { value: 'declineBenchPress', label: 'Decline Bench Press' },
  { value: 'cableCrossover', label: 'Cabel Crossover' },
  { value: 'dumbbellFly', label: 'Dumbbell Fly'}
];

export const backOptions = [
  { value: 'barbellRow', label: 'Barbell Row' },
  { value: 'latPulldown', label: 'Lat Pulldown' },
  { value: 'deadlift', label: 'Deadlift' },
  { value: 'pullup', label: 'Pull Up' },
  { value: 'tBarRow', label: 'T-Bar Row' },
  { value: 'goodMorning', label: 'Good Morning' }
];

export const legOptions = [
  { value: 'squat', label: 'Squat' },
  { value: 'frontSquat', label: 'Front Squat' },
  { value: 'Leg Press', label: 'Leg Press' },
  { value: 'legCurl', label: 'Leg Curl' },
  { value: 'legExtension', label: 'Leg Extension' },
  { value: 'sldl', label: 'Stiff-Legged Deadlift' },
  { value: 'gluteHamRaise', label: 'Glute-Ham Raise' },
  { value: 'seatedCalfRaise', label: 'Seated Calf Raise' },
  { value: 'standingCalfRaise', label: 'Standing Calf Raise' },
];

export const absOptions = [
  { value: 'crunch', label: 'Crunch' },
  { value: 'crunchMachine', label: 'Crunch Machine' },
  { value: 'plank', label: 'Plank' },
  { value: 'cableCrunch', label: 'Cable Crunch' },
  { value: 'abWheel', label: 'Hanging Leg Raise' }
];

export const groupedOptions = [
  {
    label: 'Shoulders',
    options: shoulderOptions
  },
  {
    label: 'Biceps',
    options: bicepsOptions
  },
  {
    label: 'Triceps',
    options: tricepsOptions
  },
  {
    label: 'Chest',
    options: chestOptions
  },
  {
    label: 'Back',
    options: backOptions
  },
  {
    label: 'Legs',
    options: legOptions
  },
  {
    label: 'Abs',
    options: absOptions
  },
]
