"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem;
var streamersArray = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "test_channel", "noobs2ninjas", "sheevergaming", "TR7K", "terakilobyte", "comster404", "sceneofactionmusic"];
var streamersArrayDataHolder = [];

var Navs = function Navs(props) {
  return React.createElement(
    Nav,
    { bsStyle: "pills", justified: true, activeKey: props.activeKey, onSelect: props.handleSelect },
    React.createElement(
      NavItem,
      { className: "pill", eventKey: 1 },
      React.createElement(
        "span",
        null,
        "All"
      ),
      " ",
      React.createElement("i", { className: "fa fa-globe globe", "aria-hidden": "true" })
    ),
    React.createElement(
      NavItem,
      { className: "pill", eventKey: 2 },
      React.createElement(
        "span",
        null,
        "Online"
      ),
      "  ",
      React.createElement("i", { className: "fa fa-check-circle-o green", "aria-hidden": "true" })
    ),
    React.createElement(
      NavItem,
      { className: "pill", eventKey: 3 },
      React.createElement(
        "span",
        null,
        "Offline"
      ),
      " ",
      React.createElement("i", { className: "fa fa-times-circle-o red", "aria-hidden": "true" })
    )
  );
};

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      term: ''
    };
    return _this;
  }

  SearchBar.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      "div",
      { className: "search-bar" },
      React.createElement("input", { className: "form-control",
        value: this.state.term //value of the input is === to the state value
        //IN REAL TIME.
        // onChange={(event) => this.setState({term: event.target.value})}/>
        , onChange: function onChange(event) {
          return _this2.onInputChange(event.target.value);
        } })
    );
  };

  SearchBar.prototype.onInputChange = function onInputChange(term) {
    this.setState({
      term: term
    });
    this._mySearch(term);
  };

  SearchBar.prototype._mySearch = function _mySearch(term) {
    var filter = term.toLowerCase();
    var lis = document.getElementsByClassName('listgroupitem');
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
      var name = lis[i].getElementsByClassName('nameTitle')[0].innerHTML;
      if (name.toLowerCase().indexOf(filter) == 0) lis[i].style.display = '';else lis[i].style.display = 'none';
    }
  };

  return SearchBar;
}(React.Component);

var TwitchList = function (_React$Component2) {
  _inherits(TwitchList, _React$Component2);

  function TwitchList() {
    _classCallCheck(this, TwitchList);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  TwitchList.prototype.getAllItemObjects = function getAllItemObjects() {
    if (this.props.streamersArrayDataHolder.length < 1) {
      return React.createElement("div", { className: "text-center", id: "loader" });
    } else {
      var itemObjects = this.props.streamersArrayDataHolder.map(function (item, index) {
        return React.createElement(TwitchListItem, {
          key: index,
          name: item.name,
          imgSrc: item.imgSrc,
          content: item.content,
          link: item.link,
          nonExistance: item.nonExistance,
          _isStreaming: item._isStreaming
        });
      });
      return itemObjects;
    }
  };

  TwitchList.prototype.getOnlineItemObjects = function getOnlineItemObjects() {
    if (this.props.streamersArrayDataHolder.length < 1) {
      return React.createElement(
        "div",
        null,
        "...Loading"
      );
    } else {
      var itemObjects = this.props.streamersArrayDataHolder.map(function (item, index) {
        if (item._isStreaming) {
          return React.createElement(TwitchListItem, {
            key: index,
            name: item.name,
            imgSrc: item.imgSrc,
            content: item.content,
            link: item.link,
            nonExistance: item.nonExistance,
            _isStreaming: item._isStreaming
          });
        }
      });
      return itemObjects;
    }
  };

  TwitchList.prototype.getOfflineItemObjects = function getOfflineItemObjects() {
    if (this.props.streamersArrayDataHolder.length < 1) {
      return React.createElement(
        "div",
        null,
        "...Loading"
      );
    } else {
      var itemObjects = this.props.streamersArrayDataHolder.map(function (item, index) {

        if (item._isStreaming === false) {
          return React.createElement(TwitchListItem, {
            key: index,
            name: item.name,
            imgSrc: item.imgSrc,
            content: item.content,
            link: item.link,
            nonExistance: item.nonExistance,
            _isStreaming: item._isStreaming
          });
        }
      });
      return itemObjects;
    }
  };

  TwitchList.prototype.itemsSelector = function itemsSelector() {
    if (this.props.activeKey == 1) {
      return this.getAllItemObjects();
    } else if (this.props.activeKey == 2) {
      return this.getOnlineItemObjects();
    } else if (this.props.activeKey == 3) {
      return this.getOfflineItemObjects();
    }
  };

  TwitchList.prototype.render = function render() {
    return React.createElement(
      ListGroup,
      { className: "listgroup" },
      this.itemsSelector()
    );
  };

  return TwitchList;
}(React.Component);

var TwitchListItem = function (_React$Component3) {
  _inherits(TwitchListItem, _React$Component3);

  function TwitchListItem() {
    _classCallCheck(this, TwitchListItem);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  TwitchListItem.prototype.statusFinder = function statusFinder() {
    if (this.props._isStreaming === true) {
      return React.createElement("i", { className: "fa fa-check-circle-o green", "aria-hidden": "true" });
    } else if (this.props._isStreaming === false && !this.props.nonExistance) {
      return React.createElement("i", { className: "fa fa-times-circle-o red", "aria-hidden": "true" });
    } else {
      return 'Account Closed';
    }
  };

  TwitchListItem.prototype.render = function render() {
    return React.createElement(
      ListGroupItem,
      { className: "listgroupitem", href: this.props.link, target: "_blank" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-4 col-sm-4 col-xs-4" },
          React.createElement("img", { src: this.props.imgSrc, height: "75", width: "75", style: { borderRadius: '15px' } })
        ),
        React.createElement(
          "div",
          { className: "col-md-4 col-sm-4 col-xs-4 name" },
          React.createElement(
            "p",
            { className: "nameTitle" },
            this.props.name
          ),
          React.createElement(
            "span",
            null,
            this.props.content
          )
        ),
        React.createElement(
          "div",
          { className: "col-md-4 col-sm-4 col-xs-4 iconStatus" },
          React.createElement(
            "span",
            null,
            this.statusFinder()
          )
        )
      )
    );
  };

  return TwitchListItem;
}(React.Component);

var Main = function (_React$Component4) {
  _inherits(Main, _React$Component4);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this5 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

    _this5.state = {
      activeKey: 1,
      streamersArrayDataHolder: []
    };
    return _this5;
  }

  Main.prototype.componentWillMount = function componentWillMount() {
    this.fetchTwitchApi();
  };

  Main.prototype.fetchTwitchApi = function fetchTwitchApi() {
    var myThis = this; //use this variable to access global this
    var nonImgUrl = 'http://1.bp.blogspot.com/-An8klzluffQ/Ul8rhCqp29I/AAAAAAAAAi0/CzO4Tbe1nkk/s1600/no_image_small.png';
    var cId = 'meyikwzfnzu6qf8h5jm2lejtghxxiju';
    streamersArray.forEach(function (channel) {
      var url = "https://api.twitch.tv/kraken/streams/" + channel;

      $.ajax({
        type: 'GET',
        url: url,
        headers: {
          'Client-ID': cId
        },
        error: function (data) {
          var newObjectError = {
            nonExistance: true,
            name: channel,
            imgSrc: nonImgUrl,
            _isStreaming: false
          };
          myThis.setState({
            streamersArrayDataHolder: myThis.state.streamersArrayDataHolder.concat(newObjectError)
          });
        }.bind(this),
        success: function success(data) {

          $.ajax({
            type: 'GET',
            url: data._links.channel,
            headers: {
              'Client-ID': cId
            },
            success: function success(channelInfo) {
              var newObject = {
                imgSrc: channelInfo.logo || nonImgUrl,
                name: channelInfo.name,
                link: channelInfo.url

              };
              if (!data.stream) {
                newObject._isStreaming = false; //add property to check if streaming
              } else {
                  newObject._isStreaming = true; //add property to check if streaming
                  newObject.content = data.stream.game;
                }

              myThis.setState({
                streamersArrayDataHolder: myThis.state.streamersArrayDataHolder.concat(newObject)
              });
            }
          });
        }
      });
    });
  };

  /** Sets the state of the active Nav
      Takes a selectedKey argument, wich is the eventKey of nav selected
  */

  Main.prototype.handleSelect = function handleSelect(selectedKey) {
    this.setState({
      activeKey: selectedKey
    });
  };

  Main.prototype.render = function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(Navs, { activeKey: this.state.activeKey, handleSelect: this.handleSelect.bind(this) }),
      React.createElement(SearchBar, null),
      React.createElement(TwitchList, { activeKey: this.state.activeKey, streamersArrayDataHolder: this.state.streamersArrayDataHolder })
    );
  };

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.querySelector('#myContainer'));