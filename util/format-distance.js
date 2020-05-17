const { formatDistance } = require('date-fns');
const { tr } = require('date-fns/locale');

module.exports = currentTime => formatDistance(
    currentTime,
    new Date(),
    {
        locale: tr,
        addSuffix: true
    }
);

