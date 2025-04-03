'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "00eef333dbc16044e5ed23a2ee793176",
"version.json": "bfecad57a3f6090754cffa82f7d77950",
"index.html": "28e2c6b7b112aad0c66e42a0d5e13f45",
"/": "28e2c6b7b112aad0c66e42a0d5e13f45",
"main.dart.js": "82bee8e0d20e189091c36d247d64c883",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5f09e57333b87c32b0beb4d5929a90cb",
"assets/AssetManifest.json": "eccee99347210b32f07f43bd794c7b02",
"assets/NOTICES": "a86baa673d9d5989dc7560adb7023105",
"assets/FontManifest.json": "9764c646c272751488ebcdb2a2625555",
"assets/AssetManifest.bin.json": "70d56a41f89d86a0bbd9c61c33956aaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4496ca7ac5f2168f335ebb5f6dcb320f",
"assets/fonts/MaterialIcons-Regular.otf": "23ed3fc54a552569450aa1f962a12c00",
"assets/assets/images/ui/scene_button_toggle_bounds.png": "66de246656ac580f00fb84ae86bf4955",
"assets/assets/images/ui/scene_button_move.png": "1096b7ce3dbd329d524607e89b43715a",
"assets/assets/images/ui/circle_button_contract_idle.png": "c68e5f432f349b5800b81a43422af879",
"assets/assets/images/ui/icon_ai.png": "24c13c5d3c362129e4f802b2cf4a79d0",
"assets/assets/images/ui/icon_scene.png": "3b2d5dfcdd3abb5ee521a5981ca39131",
"assets/assets/images/ui/icon_image.png": "abe608e9802fec36f9db5b4c3b490c37",
"assets/assets/images/ui/icon_left_arrow.png": "0e68fd952ed9e6c2389cd6ee6a53210a",
"assets/assets/images/ui/circle_button_info_press.png": "b018eb5523289dfa8f8af35bf141f239",
"assets/assets/images/ui/scene_button_recentre.png": "766fc1f8d924e4c8b00f490d0ab794f3",
"assets/assets/images/ui/scene_button_rotate.png": "c3d324e31c1973ac08f29e58b59c89fd",
"assets/assets/images/ui/scene_button_toggle_snap.png": "6089b524ad7ff7b46e468c960cf9206b",
"assets/assets/images/ui/circle_button_info_idle.png": "8a8ffd44e6764c5c21c92b61b6cad8c6",
"assets/assets/images/ui/scene_button_layer_up.png": "f0bcd95614aeeb9f16f6a041ee8732bb",
"assets/assets/images/ui/icon_right_arrow.png": "ca7a754e351f1bf6aa8be998a84cbd20",
"assets/assets/images/ui/scene_button_bound_scale_x.png": "12f5eb5faabc8ecd1b6a9008c7cbec05",
"assets/assets/images/ui/circle_button_contract_press.png": "f7130fc10ed10269c9dbcb58cc898e32",
"assets/assets/images/ui/scene_button_bound_scale_y.png": "22aad44370cb875fc33093e05440f886",
"assets/assets/images/ui/icon_grid.png": "7f8d52372acb47e33e4c229f3b45ef2d",
"assets/assets/images/ui/circle_button_expand_idle.png": "f35572ca5647525bef8ab028d98cf8bd",
"assets/assets/images/ui/icon_node_editor.png": "783723a41eec5b97deb18bc7249fcea7",
"assets/assets/images/ui/icon_reel_array.png": "a2f935ca792283af655d0af34c166ae6",
"assets/assets/images/ui/icon_maths.png": "d0389e59ebbc5681f6f14331c98198a6",
"assets/assets/images/ui/circle_button_expand_press.png": "00fbca0c704e21d2b159f5e8ca51e9d6",
"assets/assets/images/ui/scene_button_layer_down.png": "d88cfdba7a192647f5bbf82a2348d306",
"assets/assets/images/ui/scene_button_undo.png": "52c70d09aa1a1cfb123bc5313a476348",
"assets/assets/images/ui/icon_tables.png": "e1afe8a913b276baa22e337b38e5b8a7",
"assets/assets/images/ui/scene_button_scale.png": "fa5ff9a12a27b006d333f91404775e92",
"assets/assets/images/ui/scene_button_anchor.png": "0dcc9669d6020125aa86dd1738a3360d",
"assets/assets/images/new_game.jpg": "845b760a72252462e880d7127f57aab7",
"assets/assets/images/big_reel_game.png": "6a9bcebdda08569e85c44a9e383b4d5c",
"assets/assets/images/test_image.png": "9db0c275441078a272c8323d6bb59ef1",
"assets/assets/images/logo_large.png": "d4e6d550f7b152118b3418436ba5074a",
"assets/assets/images/football_plinko_game.jpg": "1473fede79d5a24ef4cd0e324fc91724",
"assets/assets/images/game_tiles/africa_game.jpg": "1473fede79d5a24ef4cd0e324fc91724",
"assets/assets/images/game_tiles/big_reel_game.jpg": "2b6436cec349b66e3c07cd648382ec31",
"assets/assets/images/game_tiles/coin_rocket_game.jpg": "624cca20d099f08988d151da65b280fc",
"assets/assets/images/game_tiles/template_game.jpg": "0ba7e284099996aa905ce310840051fd",
"assets/assets/images/pyramid_pick_game.png": "c32cbc5143d247c01f79f53129df5418",
"assets/assets/images/logo_small.png": "b475b2aca968b36094afe3928c7377d4",
"assets/assets/images/games/devGame/strip_7.png": "baec65ae887e058a42fc7fd4def2dc0d",
"assets/assets/images/games/devGame/strip_6.png": "fac46dffc0d8422b7a9f14f9fd53c24b",
"assets/assets/images/games/devGame/strip_4.png": "41abf41cb8782adc8940a698a7e59ab0",
"assets/assets/images/games/devGame/cash_button_disable.png": "9115afff559cdc1c66dde856bf9b682f",
"assets/assets/images/games/devGame/strip_5.png": "f65b43d15ee78fa4e3546cb4cf6d6030",
"assets/assets/images/games/devGame/tails_button_disable.png": "09fc72a88736848caa22dd34c87aabaa",
"assets/assets/images/games/devGame/strip_1.png": "4b7643abeb30cbac0e09abc920093a2d",
"assets/assets/images/games/devGame/Untitled-1.png": "41c9015406086466556c904129de4f97",
"assets/assets/images/games/devGame/strip_0.png": "603a2d88d966dc9629882b788755461d",
"assets/assets/images/games/devGame/strip_2.png": "1e650ae9d1d7776cbe0cc75be993f4ef",
"assets/assets/images/games/devGame/meter_bg.png": "dfd9b5a93fe519b486fd0697155a03ba",
"assets/assets/images/games/devGame/tails_button_idle.png": "5e93aefa13d7e8d05d78d07162bec5aa",
"assets/assets/images/games/devGame/strip_3.png": "0d1ffea21aa40c033b704ff64cb5e9b8",
"assets/assets/images/games/devGame/empty.png": "1d52bfe7e1e59bc68379ca398faf9d47",
"assets/assets/images/games/devGame/box_5.png": "3aa3765dfd1a330dd1ccc36566bb3187",
"assets/assets/images/games/devGame/box_4.png": "b3ffa8a383a1c181700ec601fdbc77e3",
"assets/assets/images/games/devGame/coin_t.png": "8183a5c63ec1df695ddf883f7d4211db",
"assets/assets/images/games/devGame/box_6.png": "ac1d76d59b308cca3a4eea92aca8fd17",
"assets/assets/images/games/devGame/box_7.png": "fb5f8e45a14ba8bef596dfa72a73d1b4",
"assets/assets/images/games/devGame/heads_button_disable.png": "b5bf18e74e5c46288253780db871b3e1",
"assets/assets/images/games/devGame/coin_q.png": "93acedc6070e0e0389545c72842f7a52",
"assets/assets/images/games/devGame/box_3.png": "41c9015406086466556c904129de4f97",
"assets/assets/images/games/devGame/box_2.png": "e5944144b83e1316408a26f8f8186861",
"assets/assets/images/games/devGame/test_image.png": "9db0c275441078a272c8323d6bb59ef1",
"assets/assets/images/games/devGame/box_0.png": "2f814d3dde8516bb8c908b51dd69c20c",
"assets/assets/images/games/devGame/box_1.png": "e643b93755b6cf260b4e60912b9328d3",
"assets/assets/images/games/devGame/ladder.png": "a33c819f59f305e24ab9468dd9b11efa",
"assets/assets/images/games/devGame/ladder2.png": "ba5ad022e292d917375b19bb2415497c",
"assets/assets/images/games/devGame/heads_button_press.png": "ae9a9b4c51e91929b1b9384faebc1e98",
"assets/assets/images/games/devGame/cash_button_idle.png": "ac9e46b06c17a2adae2f06305a86ef6f",
"assets/assets/images/games/devGame/coin_h.png": "ba75b7ded356f81226681c640fb3cfbe",
"assets/assets/images/games/devGame/main_background.jpg": "8a6eaa87238355b2d89c9ed5dc65c9f7",
"assets/assets/images/games/devGame/tails_button_press.png": "22fce3bf0c67a9fb27939635e085aba7",
"assets/assets/images/games/devGame/strip_10.png": "f89edfc1074466bf395a04391ff359fc",
"assets/assets/images/games/devGame/strip_11.png": "727b5719faa1b8b5bc6e4485589ee8bc",
"assets/assets/images/games/devGame/cash_button_press.png": "7b45d3f9f9a069f73d863517d969a44b",
"assets/assets/images/games/devGame/box_11.png": "388c1bf73c3d986abe0ea29214d76c89",
"assets/assets/images/games/devGame/box_9.png": "d6132e6c39d742729bc7e38f6cf57996",
"assets/assets/images/games/devGame/box_8.png": "32ca33412ebb821aba1a8f9327ede0f9",
"assets/assets/images/games/devGame/box_10.png": "86facf59d89d31138ec54dd386ca53fe",
"assets/assets/images/games/devGame/button_frame.png": "5687f7d3b5bc6afad0fd7f4481d12286",
"assets/assets/images/games/devGame/sun.png": "7180fabc53a5aa5edd78334fa859d588",
"assets/assets/images/games/devGame/strip_8.png": "2544decad578d19166a29d90213fd46b",
"assets/assets/images/games/devGame/ladder_back.png": "4e41c058a2ce027cf3e04e8a9640ff0c",
"assets/assets/images/games/devGame/strip_9.png": "b1d7fc9e71368373ae2373efafa6997d",
"assets/assets/images/games/devGame/heads_button_idle.png": "63bcfc5cdd46032e6e53950d8e58717f",
"assets/assets/images/games/devGame/coin_parent.png": "43b146c08933d87c391e226cb306acc8",
"assets/assets/images/games/footballPlinkoGame/panel_hub.png": "f11fddcfee085f682333ff6a0a4c72f7",
"assets/assets/images/games/footballPlinkoGame/flag_libya.jpg": "34d7e0a8154ba746ed3a00ca45e0a3d9",
"assets/assets/images/games/footballPlinkoGame/flag_mali.jpg": "07773f7ce91d93eccf9e14261e146e86",
"assets/assets/images/games/footballPlinkoGame/bet_down_disabled.png": "39bfa9d3d8216bd4aee08489a33deb25",
"assets/assets/images/games/footballPlinkoGame/ball.png": "f57269e49a1fea0f27b3fc9d95cb12ad",
"assets/assets/images/games/footballPlinkoGame/prize_1plus.png": "60946225ca96474f8cef848f080f7b6d",
"assets/assets/images/games/footballPlinkoGame/blue_dot.png": "a9501ce85deaf371edd53e0619e6f1dd",
"assets/assets/images/games/footballPlinkoGame/meter_bg.png": "dfd9b5a93fe519b486fd0697155a03ba",
"assets/assets/images/games/footballPlinkoGame/flag_somalia.jpg": "d33d2559e4e4e95cac3bde5a168ecb3f",
"assets/assets/images/games/footballPlinkoGame/bet_down.png": "fd8a7933baa23a62e7eff4e8be404821",
"assets/assets/images/games/footballPlinkoGame/red_dot.png": "2a233dd969ac536128378585c2a58b11",
"assets/assets/images/games/footballPlinkoGame/bet_down_pressed.png": "0f32c4741a5c35853e9dfa647c53769b",
"assets/assets/images/games/footballPlinkoGame/red_dot_2.png": "eb7f060932b1f047556fc3bf03973c75",
"assets/assets/images/games/footballPlinkoGame/prize_3plus.png": "75132eb7f5167030b60d0963da2ba963",
"assets/assets/images/games/footballPlinkoGame/big_msg_bg.png": "e8d89b8a384869407297ae8dddeee42f",
"assets/assets/images/games/footballPlinkoGame/bet_button_hover.png": "de2582f7aaf71b90ee878670f97c34d0",
"assets/assets/images/games/footballPlinkoGame/flag_morocco.jpg": "774cef6770aab6cbff81e6a3abb98b9d",
"assets/assets/images/games/footballPlinkoGame/prize_2plus.png": "bc255cfb86614569d733e671e09c8286",
"assets/assets/images/games/footballPlinkoGame/field.png": "ed8626b2f9221937f5e5c4c996a17e6f",
"assets/assets/images/games/footballPlinkoGame/flag_chad.jpg": "ea785bfdbeaaf06e8a5bdccdff91998d",
"assets/assets/images/games/footballPlinkoGame/ball_hub.png": "1238fcfab7c1b6d2345af4b43bba57ac",
"assets/assets/images/games/footballPlinkoGame/blue_dot_2.png": "bb16e3dfe6adebe56a5d635b414f5a08",
"assets/assets/images/games/footballPlinkoGame/ball_arrow.png": "9a592b5b4c5ff6b3be7f2f4e0cd5f86a",
"assets/assets/images/games/footballPlinkoGame/prize_2x.png": "5f8c11143d8748254816691d88bd6207",
"assets/assets/images/games/footballPlinkoGame/bet_button_pressed.png": "de2582f7aaf71b90ee878670f97c34d0",
"assets/assets/images/games/footballPlinkoGame/flag_niger.jpg": "3b897651d8d9e535fa2d3a246e649256",
"assets/assets/images/games/footballPlinkoGame/prize_10plus.png": "f3a1e6cb3e26fa68b8942d926d97fe44",
"assets/assets/images/games/footballPlinkoGame/main_background.jpg": "d16c8f2c0e907119ee300b2711f133b1",
"assets/assets/images/games/footballPlinkoGame/logo2.psd": "60a873cf61bfbb3a85b2fbbe2216d35e",
"assets/assets/images/games/footballPlinkoGame/logo.psd": "051186802994c8e35bf621d5f1460fa1",
"assets/assets/images/games/footballPlinkoGame/bet_button_disabled.png": "4df075fac45cbf7a4aecc262f8c919fd",
"assets/assets/images/games/footballPlinkoGame/bet_up_disabled.png": "190ff8bb8bdcedc70b31b404d8978304",
"assets/assets/images/games/footballPlinkoGame/bet_button.png": "4bfbbeb5c58c8d48e186c00c8a8ec130",
"assets/assets/images/games/footballPlinkoGame/bet_up.png": "2dbe2806b402a7dd05dcf218d7367b0b",
"assets/assets/images/games/footballPlinkoGame/prize_20x.png": "45eefbeed432e4081dac8561e3683d03",
"assets/assets/images/games/footballPlinkoGame/prize_3x.png": "b3ee272b4c6e90f05d833be82bbdfa6d",
"assets/assets/images/games/footballPlinkoGame/prize_half.png": "0750467efdd1c204345acdeef6f5795d",
"assets/assets/images/games/footballPlinkoGame/prize_50x.png": "f620b8b96b0b7da27de4bd2787f64552",
"assets/assets/images/games/footballPlinkoGame/blue_prize.png": "281c6b36ddcc6b1b7ac8da2620aa0e61",
"assets/assets/images/games/footballPlinkoGame/flag_nigeria.jpg": "598f9c6a2665dfc6e88b6ae24d345dea",
"assets/assets/images/games/footballPlinkoGame/red_prize.png": "521b49e725a484c139027c83a4e593db",
"assets/assets/images/games/footballPlinkoGame/flag_senegal.jpg": "0de502f47ab7ccbffa7eb83b2ca70a5a",
"assets/assets/images/games/footballPlinkoGame/prize_5x.png": "dafaa79f83b8490693846a11c723133e",
"assets/assets/images/games/footballPlinkoGame/field%2520front.png": "0952df262e480d928715dd6bf4811e77",
"assets/assets/images/games/footballPlinkoGame/prize_10x.png": "75f567fa3b0f09ba46ef772bc6f66adb",
"assets/assets/images/games/footballPlinkoGame/bet_up_pressed.png": "fbd6df2c4806454adc32cda797e0bd83",
"assets/assets/images/games/footballPlinkoGame/prize_5plus.png": "50fe2ad3acefc2c86d89b7623d0ac636",
"assets/assets/images/games/footballPlinkoGame/flag_hub.png": "48e736090314e8cbf251e372fdadb9bd",
"assets/assets/images/games/bigReelGame/panel_hub.png": "a9e82d7c19dfa3c2831facbb9cee3946",
"assets/assets/images/games/bigReelGame/button_turbo_on_disabled.png": "1ea5413f4d9314b7534a4396df702cbf",
"assets/assets/images/games/bigReelGame/bet_down_disabled.png": "39bfa9d3d8216bd4aee08489a33deb25",
"assets/assets/images/games/bigReelGame/collect_button_idle.png": "de5b38686e19d514691e1e51a63bf594",
"assets/assets/images/games/bigReelGame/ladder_frame.png": "fed2d511bc3db4fdc1b95b944b28ed5a",
"assets/assets/images/games/bigReelGame/spin_again_button_disable.png": "5ee6dba901c7f296b1841fae2fd9e0a6",
"assets/assets/images/games/bigReelGame/meter_bg.png": "dfd9b5a93fe519b486fd0697155a03ba",
"assets/assets/images/games/bigReelGame/bet_down.png": "fd8a7933baa23a62e7eff4e8be404821",
"assets/assets/images/games/bigReelGame/bet_down_pressed.png": "0f32c4741a5c35853e9dfa647c53769b",
"assets/assets/images/games/bigReelGame/big_reel_frame.png": "1e70d59de272c446ca2a6af1b69f2017",
"assets/assets/images/games/bigReelGame/stop_button_disable.png": "7f9398e62d9abef9fa9202b3c534dcfc",
"assets/assets/images/games/bigReelGame/big_msg_bg.png": "e8d89b8a384869407297ae8dddeee42f",
"assets/assets/images/games/bigReelGame/spin_button_press.png": "66693ad1da8ca0e5b44c5f50af227684",
"assets/assets/images/games/bigReelGame/sym2.png": "7f66ed741c432aadbe91823a703177e8",
"assets/assets/images/games/bigReelGame/sym3.png": "fbee037f4be3c6b55e02366db0089ef4",
"assets/assets/images/games/bigReelGame/button_turbo_off.png": "802a4c9ea73f7e3189bc1dd936a80d83",
"assets/assets/images/games/bigReelGame/lil_reel_frame.png": "0aba2714fa87cd0cc3851b2bd53cf206",
"assets/assets/images/games/bigReelGame/sym1.png": "ecbd80c2dd655f720f738ef552847d42",
"assets/assets/images/games/bigReelGame/ladder2.png": "e6b8f91fbb5fbf4fb3faf3f21e2e1c64",
"assets/assets/images/games/bigReelGame/spin_again_button_idle.png": "40c0f099d4375813ba9e148e7f04d6a8",
"assets/assets/images/games/bigReelGame/ladder3.png": "c38ad2f6b7fcf211d2b5801d970925d4",
"assets/assets/images/games/bigReelGame/ladder1.png": "5a2b9b7abadf3f2e4df1824645237dfc",
"assets/assets/images/games/bigReelGame/spin_button_disable.png": "895ad36e7c4de610cc311a7e2a90bfdb",
"assets/assets/images/games/bigReelGame/button_turbo_off_disabled.png": "9dcafef5be21bf5f46efb8b7f4711ba9",
"assets/assets/images/games/bigReelGame/collect_button_press.png": "37ea11b2aeed82bcd9d7242367ddb2b9",
"assets/assets/images/games/bigReelGame/main_background.jpg": "075b883302c32d15481e882f61a2049c",
"assets/assets/images/games/bigReelGame/logo.png": "8770214d5640bb7b72da86179338037c",
"assets/assets/images/games/bigReelGame/panel.png": "f82c79771cc1fc81d225fb301682a312",
"assets/assets/images/games/bigReelGame/collect_button_disable.png": "539087c5365e75e0b6eeb7b1e921db0d",
"assets/assets/images/games/bigReelGame/spin_button_idle.png": "a4d7b7478989c1e677cce729c2afd06f",
"assets/assets/images/games/bigReelGame/bet_up_disabled.png": "190ff8bb8bdcedc70b31b404d8978304",
"assets/assets/images/games/bigReelGame/sym_bomb.png": "0558205269f7a54476adb81289bd125a",
"assets/assets/images/games/bigReelGame/stop_button_idle.png": "7ebf4db41be70dcc8a0b381bf849ba92",
"assets/assets/images/games/bigReelGame/sym_stats.png": "8b230527bdc0b363280a34b361f25a27",
"assets/assets/images/games/bigReelGame/bet_up.png": "2dbe2806b402a7dd05dcf218d7367b0b",
"assets/assets/images/games/bigReelGame/spin_again_button_press.png": "b591d1b85aa663c85e389e41ce727a97",
"assets/assets/images/games/bigReelGame/stop_button_press.png": "735683ee2cbdf2872214c6b0edd6158e",
"assets/assets/images/games/bigReelGame/button_turbo_on.png": "2736cb5a3cdc59fa30b7977728921a83",
"assets/assets/images/games/bigReelGame/ladder_bg.png": "072faf5dd7f43b83d40f3edd7f0e1acf",
"assets/assets/images/games/bigReelGame/symbol_hilight.png": "22a0203aaf5e2d225c35e9a6202ecb2e",
"assets/assets/images/games/bigReelGame/bet_up_pressed.png": "fbd6df2c4806454adc32cda797e0bd83",
"assets/assets/images/games/bigReelGame/symWild.png": "cef3e95c9ba9e819eae1dcfa05b71ef2",
"assets/assets/images/games/pyramidGame/bet_down_disabled.png": "39bfa9d3d8216bd4aee08489a33deb25",
"assets/assets/images/games/pyramidGame/cash_button_disable.png": "993ce4b4deafb8ccc6d6fcf446a66f25",
"assets/assets/images/games/pyramidGame/tails_button_disable.png": "09fc72a88736848caa22dd34c87aabaa",
"assets/assets/images/games/pyramidGame/button_hub.png": "bc3294d07eb7590134e8dc3717e19ab1",
"assets/assets/images/games/pyramidGame/triangle_back.png": "c9c004edcdcf6e0a5b267ac5a747c9cd",
"assets/assets/images/games/pyramidGame/stripes.png": "7a3fac6c161fd6123b47dcbbb829d962",
"assets/assets/images/games/pyramidGame/meter_bg.png": "dfd9b5a93fe519b486fd0697155a03ba",
"assets/assets/images/games/pyramidGame/tails_button_idle.png": "5e93aefa13d7e8d05d78d07162bec5aa",
"assets/assets/images/games/pyramidGame/bet_down.png": "fd8a7933baa23a62e7eff4e8be404821",
"assets/assets/images/games/pyramidGame/coin_t2.png": "1e9155fb5f2673066eb5a06a60fc5793",
"assets/assets/images/games/pyramidGame/bet_down_pressed.png": "0f32c4741a5c35853e9dfa647c53769b",
"assets/assets/images/games/pyramidGame/coin_t3.png": "2c307b597391ca7fa1b4784f09aa3907",
"assets/assets/images/games/pyramidGame/coin_t.png": "8183a5c63ec1df695ddf883f7d4211db",
"assets/assets/images/games/pyramidGame/coin_touch.png": "4009c54f0b041ec0581568866936c683",
"assets/assets/images/games/pyramidGame/bet_button_hover.png": "de2582f7aaf71b90ee878670f97c34d0",
"assets/assets/images/games/pyramidGame/heads_button_disable.png": "b5bf18e74e5c46288253780db871b3e1",
"assets/assets/images/games/pyramidGame/coin_q.png": "93acedc6070e0e0389545c72842f7a52",
"assets/assets/images/games/pyramidGame/light_beam.png": "51edc52c15897cb85f3117405f85477f",
"assets/assets/images/games/pyramidGame/triangle.png": "8226ae80221c416a1ef0ec425e8ddcc8",
"assets/assets/images/games/pyramidGame/heads_button_press.png": "ae9a9b4c51e91929b1b9384faebc1e98",
"assets/assets/images/games/pyramidGame/bet_button_pressed.png": "de2582f7aaf71b90ee878670f97c34d0",
"assets/assets/images/games/pyramidGame/cash_button_idle.png": "46576723489b0c1b24a43089da2c4824",
"assets/assets/images/games/pyramidGame/coin_h.png": "ba75b7ded356f81226681c640fb3cfbe",
"assets/assets/images/games/pyramidGame/main_background.jpg": "0336df81e621961558956673c377a2a3",
"assets/assets/images/games/pyramidGame/how_to_idle.png": "70fce48e663c5716d3443298a80d8692",
"assets/assets/images/games/pyramidGame/4096.png": "2bb1d67a41019e9bad385f4735441fad",
"assets/assets/images/games/pyramidGame/tails_button_press.png": "9dba56760fdf26745b55f0f220438c6a",
"assets/assets/images/games/pyramidGame/bet_button_disabled.png": "4df075fac45cbf7a4aecc262f8c919fd",
"assets/assets/images/games/pyramidGame/game_info_panel.png": "be4561ce180400cf9c3b25d78167e934",
"assets/assets/images/games/pyramidGame/bet_up_disabled.png": "190ff8bb8bdcedc70b31b404d8978304",
"assets/assets/images/games/pyramidGame/cash_button_press.png": "5099b06b3d7f6eb168aeb9c3522ac333",
"assets/assets/images/games/pyramidGame/bet_button.png": "4bfbbeb5c58c8d48e186c00c8a8ec130",
"assets/assets/images/games/pyramidGame/bet_up.png": "2dbe2806b402a7dd05dcf218d7367b0b",
"assets/assets/images/games/pyramidGame/pp_logo.png": "ae796bc90d2b245a1d3d089263621eb5",
"assets/assets/images/games/pyramidGame/how_to_disable.png": "24d82de1eb6dde212f5d53c916149f09",
"assets/assets/images/games/pyramidGame/how_to_press.png": "aa070c649252de3bce7ed01f2d3cb6e7",
"assets/assets/images/games/pyramidGame/coin_h3.png": "3c7c713d11f8fc5253f92def0ef74a28",
"assets/assets/images/games/pyramidGame/coin_h2.png": "f6e6cd3082d9f0baba10e28b3e6767bb",
"assets/assets/images/games/pyramidGame/heads_button_idle.png": "63bcfc5cdd46032e6e53950d8e58717f",
"assets/assets/images/games/pyramidGame/bet_up_pressed.png": "fbd6df2c4806454adc32cda797e0bd83",
"assets/assets/fonts/MontserratBoldItalic-4B3w9.ttf": "f1b5d62f4e3daef0c693a8e482a71299",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
