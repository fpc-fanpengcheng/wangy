const obj = {
  code: 0,
  message: 'ok',
  data: {
    title: 'leting Go-陈么楠',
    author: '蔡健雅',
    duration: '02:04',
    pic: 'https://p1.music.126.net/jvDVEYjmrXXds2vUI71jow==/109951164795538863.jpg?imageView&thumbnail=50y50&quality=15&tostatic=0',
    audio: 'images/obj_w5rDlsOJwrLDjj7CmsOj_13501132607_e829_2c97_d9c0_a097991d9d721ad9a226a502f66416e4.m4a',
    lyric: '[00:00.000] 作词 : 蔡健雅\n[00:01.000] 作曲 : 蔡健雅\n[00:02.000] 编曲 : 无\n[00:11.930]本作品经过词曲著作权利方授权\n[00:15.220]这是一封离别信\n[00:18.700]写下我该离开的原因\n[00:22.130]我在你生命中扮演的角色太模糊了\n[00:29.450]你对我常忽冷忽热\n[00:32.710]我到底是情人还是朋友\n[00:36.230]爱你是否不该太认真\n[00:40.310]That’s why\n[00:42.220]I’m letting go\n[00:44.960]我终于舍得为你放开手\n[00:49.110]因为爱你爱到我心痛\n[00:54.300]但你却不懂\n[00:56.150]I’m letting go\n[00:59.170]你对一切的软弱与怠惰\n[01:03.250]让人怀疑你是否爱过我 真的爱过我\n[01:12.100]为你再也找不到借口\n[01:15.330]That’s when we should let it go\n[01:32.650]你是呼吸的空气\n[01:36.120]脱离不了的地心引力\n[01:39.740]你在我生命中 曾经是我存在的原因\n[01:46.940]或许就像他们说\n[01:50.490]爱情只会让人变愚蠢\n[01:54.010]自作多情 爱得太天真\n[01:58.010]That’s why\n[01:59.740]I’m letting go\n[02:02.660]我终于舍得为你放开手\n[02:06.660]因为爱你爱到我心痛\n[02:11.950]但你却不懂\n[02:13.880]I’m letting go\n[02:16.790]你对一切的软弱与怠惰\n[02:20.890]让人怀疑你是否爱过我 真的爱过我\n[02:29.480]为你再也找不到借口\n[02:33.060]That’s when we should let it go\n[02:42.270]在夜深人静里想着\n[02:45.650]心不安 血越沸腾\n[02:49.540]我无助 好想哭 我找不到退路\n[02:56.460]在夜深人静里写着\n[03:00.070]心慢慢就越变冷\n[03:03.300]我不恨 也不哭 我的眼泪 早已哭干了\n[03:10.410]Coz I’m letting go\n[03:13.350]我终于舍得为你放开手\n[03:17.270]因为爱你爱到我心痛\n[03:22.620]但你却不懂\n[03:24.790]I’m letting go\n[03:27.360]你对一切的软弱与怠惰\n[03:31.480]让人怀疑你是否爱过我 真的爱过我\n[03:40.200]为你再也找不到借口\n[03:43.840]That’s when we should let it go\n'
  }
}

const API = {
  queryLyric() {
    return new Promise(resolve => {
      setTimeout(
        () => {
          resolve(obj)
        },
        Math.round(Math.random() * (2000 - 500) + 500)
      )
    })
  }
}