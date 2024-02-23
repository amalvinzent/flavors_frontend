import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import { Select, Space, Spin, message } from 'antd'
import '../styles/Suggestor.css'
const log = console.log

const options = [
  {
    label: 'Maida flour',
    value: 'Maida flour',
    key: 0
  },
  {
    label: 'yogurt',
    value: 'yogurt',
    key: 1
  },
  {
    label: 'oil',
    value: 'oil',
    key: 2
  },
  {
    label: 'sugar',
    value: 'sugar',
    key: 3
  },
  {
    label: 'Gram flour',
    value: 'Gram flour',
    key: 4
  },
  {
    label: 'ghee',
    value: 'ghee',
    key: 5
  },
  {
    label: 'Carrots',
    value: 'Carrots',
    key: 6
  },
  {
    label: 'milk',
    value: 'milk',
    key: 7
  },
  {
    label: 'cashews',
    value: 'cashews',
    key: 8
  },
  {
    label: 'raisins',
    value: 'raisins',
    key: 9
  },
  {
    label: 'Flour',
    value: 'Flour',
    key: 10
  },
  {
    label: 'kewra',
    value: 'kewra',
    key: 11
  },
  {
    label: 'clarified butter',
    value: 'clarified butter',
    key: 12
  },
  {
    label: 'almonds',
    value: 'almonds',
    key: 13
  },
  {
    label: 'pistachio',
    value: 'pistachio',
    key: 14
  },
  {
    label: 'saffron',
    value: 'saffron',
    key: 15
  },
  {
    label: 'green cardamom',
    value: 'green cardamom',
    key: 16
  },
  {
    label: 'Milk powder',
    value: 'Milk powder',
    key: 17
  },
  {
    label: 'plain flour',
    value: 'plain flour',
    key: 18
  },
  {
    label: 'baking powder',
    value: 'baking powder',
    key: 19
  },
  {
    label: 'water',
    value: 'water',
    key: 20
  },
  {
    label: 'rose water',
    value: 'rose water',
    key: 21
  },
  {
    label: 'Sugar syrup',
    value: 'Sugar syrup',
    key: 22
  },
  {
    label: 'lentil flour',
    value: 'lentil flour',
    key: 23
  },
  {
    label: 'Maida',
    value: 'Maida',
    key: 24
  },
  {
    label: 'corn flour',
    value: 'corn flour',
    key: 25
  },
  {
    label: 'baking soda',
    value: 'baking soda',
    key: 26
  },
  {
    label: 'vinegar',
    value: 'vinegar',
    key: 27
  },
  {
    label: 'curd',
    value: 'curd',
    key: 28
  },
  {
    label: 'turmeric',
    value: 'turmeric',
    key: 29
  },
  {
    label: 'cardamom',
    value: 'cardamom',
    key: 30
  },
  {
    label: 'Cashews',
    value: 'Cashews',
    key: 31
  },
  {
    label: 'Milk',
    value: 'Milk',
    key: 32
  },
  {
    label: 'cottage cheese',
    value: 'cottage cheese',
    key: 33
  },
  {
    label: 'rice',
    value: 'rice',
    key: 34
  },
  {
    label: 'dried fruits',
    value: 'dried fruits',
    key: 35
  },
  {
    label: 'Yogurt',
    value: 'Yogurt',
    key: 36
  },
  {
    label: 'nuts',
    value: 'nuts',
    key: 37
  },
  {
    label: 'Refined flour',
    value: 'Refined flour',
    key: 38
  },
  {
    label: 'besan',
    value: 'besan',
    key: 39
  },
  {
    label: 'powdered sugar',
    value: 'powdered sugar',
    key: 40
  },
  {
    label: 'yoghurt',
    value: 'yoghurt',
    key: 41
  },
  {
    label: 'Firm white pumpkin',
    value: 'Firm white pumpkin',
    key: 42
  },
  {
    label: 'kitchen lime',
    value: 'kitchen lime',
    key: 43
  },
  {
    label: 'alum powder',
    value: 'alum powder',
    key: 44
  },
  {
    label: 'Rice',
    value: 'Rice',
    key: 45
  },
  {
    label: 'Condensed milk',
    value: 'Condensed milk',
    key: 46
  },
  {
    label: 'spices',
    value: 'spices',
    key: 47
  },
  {
    label: 'Semolina',
    value: 'Semolina',
    key: 48
  },
  {
    label: 'Khoa',
    value: 'Khoa',
    key: 49
  },
  {
    label: 'coconut',
    value: 'coconut',
    key: 50
  },
  {
    label: 'molu leaf',
    value: 'molu leaf',
    key: 51
  },
  {
    label: 'Corn flour',
    value: 'Corn flour',
    key: 52
  },
  {
    label: 'dry fruits',
    value: 'dry fruits',
    key: 53
  },
  {
    label: 'Chhena',
    value: 'Chhena',
    key: 54
  },
  {
    label: 'Sugar',
    value: 'Sugar',
    key: 55
  },
  {
    label: 'chenna cheese',
    value: 'chenna cheese',
    key: 56
  },
  {
    label: 'cream',
    value: 'cream',
    key: 57
  },
  {
    label: 'lemon juice',
    value: 'lemon juice',
    key: 58
  },
  {
    label: 'coconut flakes',
    value: 'coconut flakes',
    key: 59
  },
  {
    label: 'Chenna',
    value: 'Chenna',
    key: 60
  },
  {
    label: 'condensed milk',
    value: 'condensed milk',
    key: 61
  },
  {
    label: 'fried milk power',
    value: 'fried milk power',
    key: 62
  },
  {
    label: 'sugar syrup',
    value: 'sugar syrup',
    key: 63
  },
  {
    label: 'Yoghurt',
    value: 'Yoghurt',
    key: 64
  },
  {
    label: 'refined flour',
    value: 'refined flour',
    key: 65
  },
  {
    label: 'fennel seeds',
    value: 'fennel seeds',
    key: 66
  },
  {
    label: 'Besan flour',
    value: 'Besan flour',
    key: 67
  },
  {
    label: 'jaggery',
    value: 'jaggery',
    key: 68
  },
  {
    label: 'flour',
    value: 'flour',
    key: 69
  },
  {
    label: 'Rice flour',
    value: 'Rice flour',
    key: 70
  },
  {
    label: 'wheat flour',
    value: 'wheat flour',
    key: 71
  },
  {
    label: 'sweetened milk',
    value: 'sweetened milk',
    key: 72
  },
  {
    label: 'reduced milk',
    value: 'reduced milk',
    key: 73
  },
  {
    label: 'vegetable oil',
    value: 'vegetable oil',
    key: 74
  },
  {
    label: 'elachi',
    value: 'elachi',
    key: 75
  },
  {
    label: 'Besan',
    value: 'Besan',
    key: 76
  },
  {
    label: 'cardamom powder',
    value: 'cardamom powder',
    key: 77
  },
  {
    label: 'cashews and raisins',
    value: 'cashews and raisins',
    key: 78
  },
  {
    label: 'jaggery syrup',
    value: 'jaggery syrup',
    key: 79
  },
  {
    label: 'Peanuts',
    value: 'Peanuts',
    key: 80
  },
  {
    label: 'Dharwadi buffalo milk',
    value: 'Dharwadi buffalo milk',
    key: 81
  },
  {
    label: 'Loaf bread',
    value: 'Loaf bread',
    key: 82
  },
  {
    label: 'salt',
    value: 'salt',
    key: 83
  },
  {
    label: 'semolina',
    value: 'semolina',
    key: 84
  },
  {
    label: 'Wheat flour',
    value: 'Wheat flour',
    key: 85
  },
  {
    label: 'Black lentils',
    value: 'Black lentils',
    key: 86
  },
  {
    label: 'mung bean',
    value: 'mung bean',
    key: 87
  },
  {
    label: 'skimmed milk powder',
    value: 'skimmed milk powder',
    key: 88
  },
  {
    label: 'chickpeas',
    value: 'chickpeas',
    key: 89
  },
  {
    label: 'Chana dal',
    value: 'Chana dal',
    key: 90
  },
  {
    label: 'Apricots',
    value: 'Apricots',
    key: 91
  },
  {
    label: 'Vermicelli pudding',
    value: 'Vermicelli pudding',
    key: 92
  },
  {
    label: 'banana',
    value: 'banana',
    key: 93
  },
  {
    label: 'khus-khus seeds',
    value: 'khus-khus seeds',
    key: 94
  },
  {
    label: 'Cucumber',
    value: 'Cucumber',
    key: 95
  },
  {
    label: 'rava',
    value: 'rava',
    key: 96
  },
  {
    label: 'jaggery ',
    value: 'jaggery ',
    key: 97
  },
  {
    label: 'maida flour',
    value: 'maida flour',
    key: 98
  },
  {
    label: 'Curd',
    value: 'Curd',
    key: 99
  },
  {
    label: 'Fish',
    value: 'Fish',
    key: 100
  },
  {
    label: 'potol',
    value: 'potol',
    key: 101
  },
  {
    label: 'tomato',
    value: 'tomato',
    key: 102
  },
  {
    label: 'chillies',
    value: 'chillies',
    key: 103
  },
  {
    label: 'ginger',
    value: 'ginger',
    key: 104
  },
  {
    label: 'garlic',
    value: 'garlic',
    key: 105
  },
  {
    label: 'Boiled pork',
    value: 'Boiled pork',
    key: 106
  },
  {
    label: 'onions',
    value: 'onions',
    key: 107
  },
  {
    label: 'ginger and garlic',
    value: 'ginger and garlic',
    key: 108
  },
  {
    label: 'axone',
    value: 'axone',
    key: 109
  },
  {
    label: 'pork',
    value: 'pork',
    key: 110
  },
  {
    label: 'Cauliflower',
    value: 'Cauliflower',
    key: 111
  },
  {
    label: 'potato',
    value: 'potato',
    key: 112
  },
  {
    label: 'garam masala',
    value: 'garam masala',
    key: 113
  },
  {
    label: 'curry leaves',
    value: 'curry leaves',
    key: 114
  },
  {
    label: 'bread crumbs',
    value: 'bread crumbs',
    key: 115
  },
  {
    label: 'Potato',
    value: 'Potato',
    key: 116
  },
  {
    label: 'peas',
    value: 'peas',
    key: 117
  },
  {
    label: 'fenugreek leaves',
    value: 'fenugreek leaves',
    key: 118
  },
  {
    label: 'shimla mirch',
    value: 'shimla mirch',
    key: 119
  },
  {
    label: 'amchur powder',
    value: 'amchur powder',
    key: 120
  },
  {
    label: 'Chole',
    value: 'Chole',
    key: 121
  },
  {
    label: 'Ladies finger',
    value: 'Ladies finger',
    key: 122
  },
  {
    label: 'kasuri methi',
    value: 'kasuri methi',
    key: 123
  },
  {
    label: 'tomatoes',
    value: 'tomatoes',
    key: 124
  },
  {
    label: 'chili powder',
    value: 'chili powder',
    key: 125
  },
  {
    label: 'Chicken thighs',
    value: 'Chicken thighs',
    key: 126
  },
  {
    label: 'basmati rice',
    value: 'basmati rice',
    key: 127
  },
  {
    label: 'star anise',
    value: 'star anise',
    key: 128
  },
  {
    label: 'sweet',
    value: 'sweet',
    key: 129
  },
  {
    label: 'green chillies',
    value: 'green chillies',
    key: 130
  },
  {
    label: 'Chicken',
    value: 'Chicken',
    key: 131
  },
  {
    label: 'greek yogurt',
    value: 'greek yogurt',
    key: 132
  },
  {
    label: 'garam masala powder',
    value: 'garam masala powder',
    key: 133
  },
  {
    label: 'cashew nuts',
    value: 'cashew nuts',
    key: 134
  },
  {
    label: 'butter',
    value: 'butter',
    key: 135
  },
  {
    label: 'Chickpeas',
    value: 'Chickpeas',
    key: 136
  },
  {
    label: 'tomato paste',
    value: 'tomato paste',
    key: 137
  },
  {
    label: 'red onion',
    value: 'red onion',
    key: 138
  },
  {
    label: 'avocado oil',
    value: 'avocado oil',
    key: 139
  },
  {
    label: 'Whole wheat flour',
    value: 'Whole wheat flour',
    key: 140
  },
  {
    label: 'olive oil',
    value: 'olive oil',
    key: 141
  },
  {
    label: 'hot water',
    value: 'hot water',
    key: 142
  },
  {
    label: 'all purpose flour',
    value: 'all purpose flour',
    key: 143
  },
  {
    label: 'dahi',
    value: 'dahi',
    key: 144
  },
  {
    label: 'sesame seeds',
    value: 'sesame seeds',
    key: 145
  },
  {
    label: 'Naan bread',
    value: 'Naan bread',
    key: 146
  },
  {
    label: 'tomato sauce',
    value: 'tomato sauce',
    key: 147
  },
  {
    label: 'skinless chicken breasts',
    value: 'skinless chicken breasts',
    key: 148
  },
  {
    label: 'heavy cream',
    value: 'heavy cream',
    key: 149
  },
  {
    label: 'whole wheat bread',
    value: 'whole wheat bread',
    key: 150
  },
  {
    label: 'rice flour',
    value: 'rice flour',
    key: 151
  },
  {
    label: 'whole egg',
    value: 'whole egg',
    key: 152
  },
  {
    label: 'bhatura',
    value: 'bhatura',
    key: 153
  },
  {
    label: 'bay leaf',
    value: 'bay leaf',
    key: 154
  },
  {
    label: 'cinnamon stick',
    value: 'cinnamon stick',
    key: 155
  },
  {
    label: 'Moong dal',
    value: 'Moong dal',
    key: 156
  },
  {
    label: 'masoor dal',
    value: 'masoor dal',
    key: 157
  },
  {
    label: 'chana dal',
    value: 'chana dal',
    key: 158
  },
  {
    label: 'almond',
    value: 'almond',
    key: 159
  },
  {
    label: 'green chilli',
    value: 'green chilli',
    key: 160
  },
  {
    label: 'Red kidney beans',
    value: 'Red kidney beans',
    key: 161
  },
  {
    label: 'urad dal',
    value: 'urad dal',
    key: 162
  },
  {
    label: 'Pigeon peas',
    value: 'Pigeon peas',
    key: 163
  },
  {
    label: 'Baby potatoes',
    value: 'Baby potatoes',
    key: 164
  },
  {
    label: 'Beaten rice flakes',
    value: 'Beaten rice flakes',
    key: 165
  },
  {
    label: 'green chilies',
    value: 'green chilies',
    key: 166
  },
  {
    label: 'whole wheat flour',
    value: 'whole wheat flour',
    key: 167
  },
  {
    label: 'arhar dal',
    value: 'arhar dal',
    key: 168
  },
  {
    label: 'white urad dal',
    value: 'white urad dal',
    key: 169
  },
  {
    label: 'dough',
    value: 'dough',
    key: 170
  },
  {
    label: 'Cottage cheese',
    value: 'Cottage cheese',
    key: 171
  },
  {
    label: 'bell peppers',
    value: 'bell peppers',
    key: 172
  },
  {
    label: 'gravy',
    value: 'gravy',
    key: 173
  },
  {
    label: 'gram flour',
    value: 'gram flour',
    key: 174
  },
  {
    label: 'Bitter gourd',
    value: 'Bitter gourd',
    key: 175
  },
  {
    label: 'fennel',
    value: 'fennel',
    key: 176
  },
  {
    label: 'green peas',
    value: 'green peas',
    key: 177
  },
  {
    label: 'green chili',
    value: 'green chili',
    key: 178
  },
  {
    label: 'Paneer',
    value: 'Paneer',
    key: 179
  },
  {
    label: 'Rose syrup',
    value: 'Rose syrup',
    key: 180
  },
  {
    label: 'falooda sev',
    value: 'falooda sev',
    key: 181
  },
  {
    label: 'mixed nuts',
    value: 'mixed nuts',
    key: 182
  },
  {
    label: 'Bottle gourd',
    value: 'Bottle gourd',
    key: 183
  },
  {
    label: 'coconut oil',
    value: 'coconut oil',
    key: 184
  },
  {
    label: 'roasted gram flour',
    value: 'roasted gram flour',
    key: 185
  },
  {
    label: 'nigella seeds',
    value: 'nigella seeds',
    key: 186
  },
  {
    label: 'chilli',
    value: 'chilli',
    key: 187
  },
  {
    label: 'Palak',
    value: 'Palak',
    key: 188
  },
  {
    label: 'makki atta',
    value: 'makki atta',
    key: 189
  },
  {
    label: 'mustard green',
    value: 'mustard green',
    key: 190
  },
  {
    label: 'chickpea flour',
    value: 'chickpea flour',
    key: 191
  },
  {
    label: 'Mushroom',
    value: 'Mushroom',
    key: 192
  },
  {
    label: 'malai',
    value: 'malai',
    key: 193
  },
  {
    label: 'capsicum',
    value: 'capsicum',
    key: 194
  },
  {
    label: 'Canned coconut milk',
    value: 'Canned coconut milk',
    key: 195
  },
  {
    label: 'frozen green peas',
    value: 'frozen green peas',
    key: 196
  },
  {
    label: 'wild mushrooms',
    value: 'wild mushrooms',
    key: 197
  },
  {
    label: 'honey',
    value: 'honey',
    key: 198
  },
  {
    label: 'Green beans',
    value: 'Green beans',
    key: 199
  },
  {
    label: 'potatoes',
    value: 'potatoes',
    key: 200
  },
  {
    label: 'khus khus',
    value: 'khus khus',
    key: 201
  },
  {
    label: 'low fat',
    value: 'low fat',
    key: 202
  },
  {
    label: 'palak',
    value: 'palak',
    key: 203
  },
  {
    label: 'whipping cream',
    value: 'whipping cream',
    key: 204
  },
  {
    label: 'tandoori masala',
    value: 'tandoori masala',
    key: 205
  },
  {
    label: 'bell pepper',
    value: 'bell pepper',
    key: 206
  },
  {
    label: 'Kala chana',
    value: 'Kala chana',
    key: 207
  },
  {
    label: 'mashed potato',
    value: 'mashed potato',
    key: 208
  },
  {
    label: 'boondi',
    value: 'boondi',
    key: 209
  },
  {
    label: 'sev',
    value: 'sev',
    key: 210
  },
  {
    label: 'lemon',
    value: 'lemon',
    key: 211
  },
  {
    label: 'musk melon seeds',
    value: 'musk melon seeds',
    key: 212
  },
  {
    label: 'poppy seeds',
    value: 'poppy seeds',
    key: 213
  },
  {
    label: 'edible gum',
    value: 'edible gum',
    key: 214
  },
  {
    label: 'Urad dal',
    value: 'Urad dal',
    key: 215
  },
  {
    label: 'chopped tomatoes',
    value: 'chopped tomatoes',
    key: 216
  },
  {
    label: 'coriander',
    value: 'coriander',
    key: 217
  },
  {
    label: 'Arbi ke patte',
    value: 'Arbi ke patte',
    key: 218
  },
  {
    label: 'gur',
    value: 'gur',
    key: 219
  },
  {
    label: 'bengal gram flour',
    value: 'bengal gram flour',
    key: 220
  },
  {
    label: 'imli',
    value: 'imli',
    key: 221
  },
  {
    label: 'Fennel',
    value: 'Fennel',
    key: 222
  },
  {
    label: 'tea bags',
    value: 'tea bags',
    key: 223
  },
  {
    label: 'cinnamon',
    value: 'cinnamon',
    key: 224
  },
  {
    label: 'mustard oil',
    value: 'mustard oil',
    key: 225
  },
  {
    label: 'Garam masala powder',
    value: 'Garam masala powder',
    key: 226
  },
  {
    label: 'Potatoes',
    value: 'Potatoes',
    key: 227
  },
  {
    label: 'Sattu',
    value: 'Sattu',
    key: 228
  },
  {
    label: 'atta',
    value: 'atta',
    key: 229
  },
  {
    label: 'filling',
    value: 'filling',
    key: 230
  },
  {
    label: 'Rose water',
    value: 'Rose water',
    key: 231
  },
  {
    label: 'white bread slices',
    value: 'white bread slices',
    key: 232
  },
  {
    label: 'Baby corn',
    value: 'Baby corn',
    key: 233
  },
  {
    label: 'french beans',
    value: 'french beans',
    key: 234
  },
  {
    label: 'carrot',
    value: 'carrot',
    key: 235
  },
  {
    label: 'Greek yogurt',
    value: 'Greek yogurt',
    key: 236
  },
  {
    label: 'marinade',
    value: 'marinade',
    key: 237
  },
  {
    label: 'Chickpea flour',
    value: 'Chickpea flour',
    key: 238
  },
  {
    label: 'biryani masala powder',
    value: 'biryani masala powder',
    key: 239
  },
  {
    label: 'fish fillets',
    value: 'fish fillets',
    key: 240
  },
  {
    label: 'green bell pepper',
    value: 'green bell pepper',
    key: 241
  },
  {
    label: 'kala jeera',
    value: 'kala jeera',
    key: 242
  },
  {
    label: 'Raw banana',
    value: 'Raw banana',
    key: 243
  },
  {
    label: 'elephant foot yam',
    value: 'elephant foot yam',
    key: 244
  },
  {
    label: 'long beans',
    value: 'long beans',
    key: 245
  },
  {
    label: 'tindora',
    value: 'tindora',
    key: 246
  },
  {
    label: 'Split pigeon peas',
    value: 'Split pigeon peas',
    key: 247
  },
  {
    label: 'fresh coconut',
    value: 'fresh coconut',
    key: 248
  },
  {
    label: 'whole urad dal',
    value: 'whole urad dal',
    key: 249
  },
  {
    label: 'blend rice',
    value: 'blend rice',
    key: 250
  },
  {
    label: 'rock salt',
    value: 'rock salt',
    key: 251
  },
  {
    label: 'grated coconut',
    value: 'grated coconut',
    key: 252
  },
  {
    label: 'Split urad dal',
    value: 'Split urad dal',
    key: 253
  },
  {
    label: 'idli rice',
    value: 'idli rice',
    key: 254
  },
  {
    label: 'thick poha',
    value: 'thick poha',
    key: 255
  },
  {
    label: 'Carrot',
    value: 'Carrot',
    key: 256
  },
  {
    label: 'yellow mustard',
    value: 'yellow mustard',
    key: 257
  },
  {
    label: 'red chilli',
    value: 'red chilli',
    key: 258
  },
  {
    label: 'black salt',
    value: 'black salt',
    key: 259
  },
  {
    label: 'Sesame oil',
    value: 'Sesame oil',
    key: 260
  },
  {
    label: 'drumstick',
    value: 'drumstick',
    key: 261
  },
  {
    label: 'tamarind paste',
    value: 'tamarind paste',
    key: 262
  },
  {
    label: 'sambar powder',
    value: 'sambar powder',
    key: 263
  },
  {
    label: 'spinach',
    value: 'spinach',
    key: 264
  },
  {
    label: 'mustard seeds',
    value: 'mustard seeds',
    key: 265
  },
  {
    label: 'Greens',
    value: 'Greens',
    key: 266
  },
  {
    label: 'fenugreek seeds',
    value: 'fenugreek seeds',
    key: 267
  },
  {
    label: 'Amaranth leaves',
    value: 'Amaranth leaves',
    key: 268
  },
  {
    label: 'split urad dal',
    value: 'split urad dal',
    key: 269
  },
  {
    label: 'red chili',
    value: 'red chili',
    key: 270
  },
  {
    label: 'Beef',
    value: 'Beef',
    key: 271
  },
  {
    label: 'beans',
    value: 'beans',
    key: 272
  },
  {
    label: 'cabbage',
    value: 'cabbage',
    key: 273
  },
  {
    label: 'tamarind',
    value: 'tamarind',
    key: 274
  },
  {
    label: 'cucumber',
    value: 'cucumber',
    key: 275
  },
  {
    label: 'gooseberry',
    value: 'gooseberry',
    key: 276
  },
  {
    label: 'raw rice',
    value: 'raw rice',
    key: 277
  },
  {
    label: 'Pearl onions',
    value: 'Pearl onions',
    key: 278
  },
  {
    label: 'drumsticks',
    value: 'drumsticks',
    key: 279
  },
  {
    label: 'Coconut oil',
    value: 'Coconut oil',
    key: 280
  },
  {
    label: 'Lentils',
    value: 'Lentils',
    key: 281
  },
  {
    label: 'black pepper',
    value: 'black pepper',
    key: 282
  },
  {
    label: 'Raw rice',
    value: 'Raw rice',
    key: 283
  },
  {
    label: ' jaggery',
    value: ' jaggery',
    key: 284
  },
  {
    label: 'Arhar dal',
    value: 'Arhar dal',
    key: 285
  },
  {
    label: 'Green moong beans',
    value: 'Green moong beans',
    key: 286
  },
  {
    label: 'mustard',
    value: 'mustard',
    key: 287
  },
  {
    label: 'cooked rice',
    value: 'cooked rice',
    key: 288
  },
  {
    label: 'Tomato',
    value: 'Tomato',
    key: 289
  },
  {
    label: 'Brown rice flour',
    value: 'Brown rice flour',
    key: 290
  },
  {
    label: 'eggplant',
    value: 'eggplant',
    key: 291
  },
  {
    label: 'Thin rice flakes',
    value: 'Thin rice flakes',
    key: 292
  },
  {
    label: 'black sesame seeds',
    value: 'black sesame seeds',
    key: 293
  },
  {
    label: 'Sevai',
    value: 'Sevai',
    key: 294
  },
  {
    label: 'parboiled rice',
    value: 'parboiled rice',
    key: 295
  },
  {
    label: 'steamer',
    value: 'steamer',
    key: 296
  },
  {
    label: 'sesame oil',
    value: 'sesame oil',
    key: 297
  },
  {
    label: 'Coconut',
    value: 'Coconut',
    key: 298
  },
  {
    label: 'whole red beans',
    value: 'whole red beans',
    key: 299
  },
  {
    label: 'masala',
    value: 'masala',
    key: 300
  },
  {
    label: 'Meat curry powder',
    value: 'Meat curry powder',
    key: 301
  },
  {
    label: 'chicken chunks',
    value: 'chicken chunks',
    key: 302
  },
  {
    label: 'Kala masala',
    value: 'Kala masala',
    key: 303
  },
  {
    label: 'Baingan',
    value: 'Baingan',
    key: 304
  },
  {
    label: 'fish',
    value: 'fish',
    key: 305
  },
  {
    label: 'sooji',
    value: 'sooji',
    key: 306
  },
  {
    label: 'pearl millet flour',
    value: 'pearl millet flour',
    key: 307
  },
  {
    label: 'mawa',
    value: 'mawa',
    key: 308
  },
  {
    label: 'desiccated coconut',
    value: 'desiccated coconut',
    key: 309
  },
  {
    label: 'Jowar flour',
    value: 'Jowar flour',
    key: 310
  },
  {
    label: 'Bombay duck',
    value: 'Bombay duck',
    key: 311
  },
  {
    label: 'malvani masala',
    value: 'malvani masala',
    key: 312
  },
  {
    label: 'bombay rava',
    value: 'bombay rava',
    key: 313
  },
  {
    label: 'sesame',
    value: 'sesame',
    key: 314
  },
  {
    label: 'Citric acid',
    value: 'Citric acid',
    key: 315
  },
  {
    label: 'fry',
    value: 'fry',
    key: 316
  },
  {
    label: 'chana daal',
    value: 'chana daal',
    key: 317
  },
  {
    label: 'dried mango',
    value: 'dried mango',
    key: 318
  },
  {
    label: 'nestle cream',
    value: 'nestle cream',
    key: 319
  },
  {
    label: 'coconut ice',
    value: 'coconut ice',
    key: 320
  },
  {
    label: 'red food coloring',
    value: 'red food coloring',
    key: 321
  },
  {
    label: 'dal',
    value: 'dal',
    key: 322
  },
  {
    label: 'kokum',
    value: 'kokum',
    key: 323
  },
  {
    label: 'Pav',
    value: 'Pav',
    key: 324
  },
  {
    label: 'aloo',
    value: 'aloo',
    key: 325
  },
  {
    label: 'peanut',
    value: 'peanut',
    key: 326
  },
  {
    label: 'pomegranate',
    value: 'pomegranate',
    key: 327
  },
  {
    label: 'bhuna chana',
    value: 'bhuna chana',
    key: 328
  },
  {
    label: 'dates',
    value: 'dates',
    key: 329
  },
  {
    label: 'Rava',
    value: 'Rava',
    key: 330
  },
  {
    label: 'green',
    value: 'green',
    key: 331
  },
  {
    label: 'sauce',
    value: 'sauce',
    key: 332
  },
  {
    label: 'sliced almonds',
    value: 'sliced almonds',
    key: 333
  },
  {
    label: 'Dry fruits',
    value: 'Dry fruits',
    key: 334
  },
  {
    label: 'toor dal',
    value: 'toor dal',
    key: 335
  },
  {
    label: 'Whole wheat rava',
    value: 'Whole wheat rava',
    key: 336
  },
  {
    label: 'chia seed',
    value: 'chia seed',
    key: 337
  },
  {
    label: 'litre milk',
    value: 'litre milk',
    key: 338
  },
  {
    label: 'Green chilies',
    value: 'Green chilies',
    key: 339
  },
  {
    label: 'boiled potatoes',
    value: 'boiled potatoes',
    key: 340
  },
  {
    label: 'rapeseed oil',
    value: 'rapeseed oil',
    key: 341
  },
  {
    label: 'Mango',
    value: 'Mango',
    key: 342
  },
  {
    label: 'Green chili paste',
    value: 'Green chili paste',
    key: 343
  },
  {
    label: 'white sesame seeds',
    value: 'white sesame seeds',
    key: 344
  },
  {
    label: 'Cinnamon',
    value: 'Cinnamon',
    key: 345
  },
  {
    label: 'dry roasted',
    value: 'dry roasted',
    key: 346
  },
  {
    label: 'cilantro',
    value: 'cilantro',
    key: 347
  },
  {
    label: 'badam',
    value: 'badam',
    key: 348
  },
  {
    label: 'Pav bhaji masala',
    value: 'Pav bhaji masala',
    key: 349
  },
  {
    label: 'gobi',
    value: 'gobi',
    key: 350
  },
  {
    label: 'dinner rolls',
    value: 'dinner rolls',
    key: 351
  },
  {
    label: 'Aloo',
    value: 'Aloo',
    key: 352
  },
  {
    label: 'Raw peanuts',
    value: 'Raw peanuts',
    key: 353
  },
  {
    label: 'sabudana',
    value: 'sabudana',
    key: 354
  },
  {
    label: 'Khaman',
    value: 'Khaman',
    key: 355
  },
  {
    label: 'Sev',
    value: 'Sev',
    key: 356
  },
  {
    label: 'sunflower oil',
    value: 'sunflower oil',
    key: 357
  },
  {
    label: 'Rice flakes',
    value: 'Rice flakes',
    key: 358
  },
  {
    label: 'sorghum flour',
    value: 'sorghum flour',
    key: 359
  },
  {
    label: 'Sweet potato',
    value: 'Sweet potato',
    key: 360
  },
  {
    label: 'surti papdi',
    value: 'surti papdi',
    key: 361
  },
  {
    label: 'baby potatoes',
    value: 'baby potatoes',
    key: 362
  },
  {
    label: 'valor papdi',
    value: 'valor papdi',
    key: 363
  },
  {
    label: 'Gobi',
    value: 'Gobi',
    key: 364
  },
  {
    label: 'wine vinegar',
    value: 'wine vinegar',
    key: 365
  },
  {
    label: 'Green garlic chutney',
    value: 'Green garlic chutney',
    key: 366
  },
  {
    label: 'fresh green peas',
    value: 'fresh green peas',
    key: 367
  },
  {
    label: 'Moong beans',
    value: 'Moong beans',
    key: 368
  },
  {
    label: 'red chillies',
    value: 'red chillies',
    key: 369
  },
  {
    label: 'peanut oil',
    value: 'peanut oil',
    key: 370
  },
  {
    label: 'methi leaves',
    value: 'methi leaves',
    key: 371
  },
  {
    label: 'jowar flour',
    value: 'jowar flour',
    key: 372
  },
  {
    label: 'white flour',
    value: 'white flour',
    key: 373
  },
  {
    label: 'Ridge gourd',
    value: 'Ridge gourd',
    key: 374
  },
  {
    label: 'dry coconut',
    value: 'dry coconut',
    key: 375
  },
  {
    label: 'mango',
    value: 'mango',
    key: 376
  },
  {
    label: 'Sticky rice',
    value: 'Sticky rice',
    key: 377
  },
  {
    label: 'orange rind',
    value: 'orange rind',
    key: 378
  },
  {
    label: 'Raw papaya',
    value: 'Raw papaya',
    key: 379
  },
  {
    label: 'panch phoran masala',
    value: 'panch phoran masala',
    key: 380
  },
  {
    label: 'eggs',
    value: 'eggs',
    key: 381
  },
  {
    label: 'beetroot',
    value: 'beetroot',
    key: 382
  },
  {
    label: 'Brinjal',
    value: 'Brinjal',
    key: 383
  },
  {
    label: 'Forbidden black rice',
    value: 'Forbidden black rice',
    key: 384
  },
  {
    label: 'chicken',
    value: 'chicken',
    key: 385
  },
  {
    label: 'slivered almonds',
    value: 'slivered almonds',
    key: 386
  },
  {
    label: 'garlic powder',
    value: 'garlic powder',
    key: 387
  },
  {
    label: 'Biryani masala',
    value: 'Biryani masala',
    key: 388
  },
  {
    label: 'mixed vegetables',
    value: 'mixed vegetables',
    key: 389
  },
  {
    label: 'yellow moong daal',
    value: 'yellow moong daal',
    key: 390
  },
  {
    label: 'whole red',
    value: 'whole red',
    key: 391
  },
  {
    label: 'Brown rice',
    value: 'Brown rice',
    key: 392
  },
  {
    label: 'soy sauce',
    value: 'soy sauce',
    key: 393
  },
  {
    label: 'Coconut milk',
    value: 'Coconut milk',
    key: 394
  },
  {
    label: 'lobster',
    value: 'lobster',
    key: 395
  },
  {
    label: 'fresh green chilli',
    value: 'fresh green chilli',
    key: 396
  },
  {
    label: 'Baking soda',
    value: 'Baking soda',
    key: 397
  },
  {
    label: 'Jaggery',
    value: 'Jaggery',
    key: 398
  },
  {
    label: 'Lamb',
    value: 'Lamb',
    key: 399
  },
  {
    label: 'prawns',
    value: 'prawns',
    key: 400
  },
  {
    label: 'mustard seed',
    value: 'mustard seed',
    key: 401
  },
  {
    label: 'Fish fillet',
    value: 'Fish fillet',
    key: 402
  },
  {
    label: 'mint',
    value: 'mint',
    key: 403
  },
  {
    label: 'Fermented bamboo shoot',
    value: 'Fermented bamboo shoot',
    key: 404
  },
  {
    label: 'Banana flower',
    value: 'Banana flower',
    key: 405
  },
  {
    label: 'mutton',
    value: 'mutton',
    key: 406
  },
  {
    label: 'Fish roe',
    value: 'Fish roe',
    key: 407
  },
  {
    label: 'pumpkin flowers',
    value: 'pumpkin flowers',
    key: 408
  },
  {
    label: 'dry chilli',
    value: 'dry chilli',
    key: 409
  },
  {
    label: 'Tea leaves',
    value: 'Tea leaves',
    key: 410
  },
  {
    label: 'soaked rice',
    value: 'soaked rice',
    key: 411
  },
  {
    label: 'Basmati rice',
    value: 'Basmati rice',
    key: 412
  },
  {
    label: 'cardamom pods',
    value: 'cardamom pods',
    key: 413
  },
  {
    label: 'Red pepper',
    value: 'Red pepper',
    key: 414
  },
  {
    label: 'watercress',
    value: 'watercress',
    key: 415
  },
  {
    label: 'bitter gourd',
    value: 'bitter gourd',
    key: 416
  },
  {
    label: 'ridge gourd',
    value: 'ridge gourd',
    key: 417
  },
  {
    label: 'brinjal',
    value: 'brinjal',
    key: 418
  },
  {
    label: 'Glutinous rice',
    value: 'Glutinous rice',
    key: 419
  },
  {
    label: 'egg yolks',
    value: 'egg yolks',
    key: 420
  },
  {
    label: 'dry dates',
    value: 'dry dates',
    key: 421
  },
  {
    label: 'dried rose petals',
    value: 'dried rose petals',
    key: 422
  },
  {
    label: 'arrowroot powder',
    value: 'arrowroot powder',
    key: 423
  },
  {
    label: 'ginger powder',
    value: 'ginger powder',
    key: 424
  }
]

function Suggestor() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [suggestor, setSuggestor] = useState([])

  const [messageApi, contextHolder] = message.useMessage()
  const error = (message) => {
    messageApi.open({
      type: 'error',
      content: message,
      className: 'custom-class',
      style: {
        marginTop: '5vh'
      }
    })
  }

  const handleChange = async (selected) => {
    try {
      setLoading(true)
      setSuggestor(selected)
      let response = await fetch(
        `http://localhost:3000/flavors/suggestor/new`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ingredients: selected
          })
        }
      )
      response = await response?.json()
      if (response?.statusCode == 200) {
        setData(response?.data)
      } else {
        error('an error occured')
      }
    } catch (error) {
      error('an error occured')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!loading ? (
        <>
          {contextHolder}
          <Navbar />
          <div className="suggestor_container">
            <div>search</div>
            <br />
            <Space
              style={{
                width: '100%'
              }}
              direction="vertical"
            >
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%'
                }}
                placeholder="Please select"
                value={suggestor}
                onChange={handleChange}
                options={options}
              />
            </Space>
            <br />
            <br />
            {data?.map((v, i) => {
              return (
                <div key={i}>
                  <h1 className="suggestor_name">{v?.name || ''}</h1>
                  <div className="suggestor_details">
                    <p>
                      <strong>Ingredients:</strong> {v?.ingredients || ''}
                    </p>
                    <p>
                      <strong>Diet:</strong> {v?.vegetarian || ''}
                    </p>
                    <p>
                      <strong>Prep Time:</strong> {v?.prep_time || ''}
                    </p>
                    <p>
                      <strong>Cook Time:</strong> {v?.cook_time || ''}
                    </p>
                    <p>
                      <strong>Flavor Profile:</strong> {v?.flavor_profile || ''}
                    </p>
                    <p>
                      <strong>Course:</strong> {v?.dessert || ''}
                    </p>
                    <p>
                      <strong>State:</strong> {v?.state || ''}
                    </p>
                    <p>
                      <strong>Region:</strong> {v?.region || ''}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <div className="center_spin">
          <Spin size="large" />
        </div>
      )}
    </>
  )
}

export default Suggestor
