<template>
  <div class="category" ref="aaa">
    <search v-show="isShow"></search>
    <nav-bar>
      <div slot="left" v-show="isShow" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" ref="center">
        <el-input
          suffix-icon="el-icon-date"
          placeholder="111"
          v-model="elInputValue"
          @focus="focus"
        >
        </el-input>
      </div>
      <div slot="right" v-show="isShow">
        <div class="right"><span>搜索 </span></div>
      </div>
    </nav-bar>
    <div>
        <scroll class="content">
        <ul class="cebianlan">
          <li
            v-for="(i, index) in 30"
            :class="{ active: currentIndex === index }"
            @click="currentIndex = index"
          >
            {{ i }}
          </li>
        </ul>
        </scroll>
      <scroll class="content hengfu">
        <div class=" ">
          {{ currentIndex }}
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
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>

import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from '../../components/common/scroll/Scroll.vue';
import Search from "../search/Search.vue";
export default {
  components: { NavBar, Search, Scroll },
  name: "Category",
  data() {
    return {
      scroll: null,
      elInputValue: "",
      isShow: false,
      tabPosition: "left",
      currentIndex: 0,
    };
  },
  methods: {
    focus() {
      this.isShow = true;
    },
    backClick() {
      this.isShow = false;
    },
  },
  mounted() {

  },
};
</script>

<style scoped>
.back img {
  margin: 10px 2px 0;
  padding: 0 2px;
  line-height: 44px;
  width: 20px;
  height: 20px;
}

.content{
  overflow: hidden;
  height: calc(100vh - 93px);
}
.right {
  width: 50px;
  height: 44px;
  color: red;
  line-height: 44px;
}
.cebianlan {
  width: 100px;
  text-align: center;
}
.cebianlan li {
  color: aqua;
  background-color: rgb(255, 145, 145);
  padding: 10px;
}
.cebianlan .active {
  background-color: rgb(151, 206, 165);
}
.hengfu {
  position: fixed;
  left: 100px;
  background-color: rgb(186, 100, 100);
  top: 44px;
  right: 0;
  
}
</style>