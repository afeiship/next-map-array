(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxMapList = nx.declare('nx.MapList', {
    properties: {
      length: {
        get: function() {
          return this.data.length;
        }
      }
    },
    methods: {
      init: function(inItems, inId) {
        this.id = inId;
        this.items = inItems;
        this.map = this._genMap();
      },
      id: function(inItem) {
        return typeof this.id === FUNC ? this.id(inItem) : inItem[this.id];
      },
      serialize: function() {
        return this.items;
      },
      setItem: function(inIndex, InItem) {
        this.items[inIndex] = inItem;
      },
      getItem: function(inIndex) {
        return this.items[inIndex];
      },
      setValue: function(inKey, inValue) {
        this.map[inKey] = inValue;
      },
      getValue: function(inKey) {
        return this.map[inKey];
      },
      add: function(inItem) {
        var key = this.id(inItem);
        if (!this.has(key)) {
          this.items.push(inItem);
          this.map[key] = inItem;
        }
      },
      delete: function(inIndex) {
        var key = this.id(inItem);
        if (this.has(key)) {
          this.items.splice(inIndex, 1);
          delete this.map[key];
          return true;
        }
        return false;
      },
      clear: function() {
        this.items = [];
        this.map = {};
      },
      has: function(inKey) {
        return inKey in this.map;
      },
      indexOf: function(inItem) {
        return this.items.indexOf(inItem);
      },
      _genMap: function() {
        var result = {};
        nx.each(
          this.items,
          function(item) {
            result[this.id(item)] = item;
          },
          this
        );
        return result;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxMapList;
  }
})();
