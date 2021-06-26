<template>
  <div id="profile">
    <div v-show="isActive"
     class="gerenzhongxin"
     :style="gerenzhongxinstyle"
     >个人中心</div>
    <scroll class="content"
    @scroll='show'>
      <div>
        <div class="div1">
          <nav-bar class="nav-bar1">
            <div slot="left">
              <img src="~assets/img/profile/avatar.svg" alt="" />
            </div>
            <div slot="center">
              <div class="center1">
                <div>
                  <span>谢建军</span>
                  <i class="el-icon-success"></i>
                </div>
                <div>
                  <i class="el-icon-warning"></i>
                  <span>我的拼小圈></span>
                </div>
              </div>
            </div>
            <div slot="right">
              <div class="right1">
                <div class="el-icon-success">我的部署</div>
                <div class="el-icon-success">拼单返现</div>
              </div>
            </div>
          </nav-bar>
        </div>
        <div class="div2">
          <nav-bar class="nav-bar2">
            <div slot="left">
              <div class="left2">我的订单</div>
            </div>
            <div slot="right">
              <div class="right2">查看全部></div>
            </div>
          </nav-bar>
        </div>
        <div class="div3">
          <div>
            <div class="el-icon-success"></div>
            <div>代付款</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>代分享</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待发货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待收货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待评价</div>
          </div>
        </div>
        <div class="div4">
          <nav-bar class="nav-bar2">
            <div slot="left">
              <div class="left2">我的订单</div>
            </div>
            <div slot="right">
              <div class="right2">查看全部></div>
            </div>
          </nav-bar>
        </div>
        <div class="div5">
          <div>
            <div class="el-icon-success"></div>
            <div>代付款</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>代分享</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待发货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待收货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待评价</div>
          </div>
        </div>
        <div class="div6">
          <div>
            <div class="el-icon-success"></div>
            <div>代付款</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>代分享</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待发货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待收货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待评价</div>
          </div>
        </div>
        <div class="div6">

          <div>
            <div class="el-icon-success"></div>
            <div>代付款</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>代分享</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待发货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待收货</div>
          </div>
          <div>
            <div class="el-icon-success"></div>
            <div>待评价</div>
          </div>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
          <li>51</li>
          <li>52</li>
          <li>53</li>
          <li>54</li>
          <li>55</li>
          <li>56</li>
          <li>57</li>
          <li>58</li>
          <li>59</li>
          <li>60</li>
          <li>61</li>
          <li>62</li>
          <li>63</li>
          <li>64</li>
          <li>65</li>
          <li>66</li>
          <li>67</li>
          <li>68</li>
          <li>69</li>
          <li>70</li>
          <li>71</li>
          <li>72</li>
          <li>73</li>
          <li>74</li>
          <li>75</li>
          <li>76</li>
          <li>77</li>
          <li>78</li>
          <li>79</li>
          <li>80</li>
          <li>81</li>
          <li>82</li>
          <li>83</li>
          <li>84</li>
          <li>85</li>
          <li>86</li>
          <li>87</li>
          <li>88</li>
          <li>89</li>
          <li>90</li>
          <li>91</li>
          <li>92</li>
          <li>93</li>
          <li>94</li>
          <li>95</li>
          <li>96</li>
          <li>97</li>
          <li>98</li>
          <li>99</li>
          <li>100</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";

export default {
  components: { NavBar, Scroll },
  data(){
    return {
      isActive:0,
      gerenzhongxinstyle:'opacity:'+'1'
    }
  },
  methods:{
    show(position){
      console.log(position.y);
      this.isActive=-position.y>0
      this.gerenzhongxinstyle='opacity:'+(-position.y/100)
      console.log(this.gerenzhongxinstyle);
    }
  }
};
</script>

<style scoped>
.gerenzhongxin{
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #fff;
  text-align: center;
  font-size: 18px;
  z-index: 9;
  padding: 10px;
  

}
.content{
  height: calc(100vh - 44px);
  overflow: hidden;
}
.nav-bar1 {
  height: 80px;
}
.div1 img {
  width: 70px;
  height: 70px;
}
.center1 {
  line-height: 30px;
  position: relative;
  left: -50px;
}
.center1 > div:nth-of-type(2) > span {
  font-size: 12px;
}
.center1 > div:nth-of-type(2) > i {
  position: relative;
  top: 2px;
}
.right1 {
  line-height: 40px;
  width: 100px;
  height: 100px;
}
.right1 > div {
  border: 1px black solid;
  border-radius: 20px;
  padding: 5px;
}
.left2 {
  width: 80px;
  font-size: 18px;
}
.right2 {
  width: 80px;
  font-size: 14px;
}
.div3,
.div5,
.div6 {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 5px;
  flex-wrap: wrap;
}
.div5 {
  border-bottom: 5px solid rgb(192, 192, 192);
}
.div3 [class^="el-icon"],
.div5 [class^="el-icon"],
.div6 [class^="el-icon"] {
  font-size: 200%;
}
</style>