'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sundays', [
      {
        date: '3 Oct 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
        isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '10 Oct 2021 12:00:00 GMT-0400',
        isFastSunday: true,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '17 Oct 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '24 Oct 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '31 Oct 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: true,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '7 Nov 2021 12:00:00 GMT-0400',
        isFastSunday: true,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '14 Nov 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: true,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '21 Nov 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '28 Nov 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '5 Dec 2021 12:00:00 GMT-0400',
        isFastSunday: true,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '12 Dec 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '19 Dec 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '26 Dec 2021 12:00:00 GMT-0400',
        isFastSunday: false,
        is5thSunday: false,
        isWardConference: false,
        isStakeConference: false,
        isGeneralConference: true,
				isPrimaryProgram: false,
        isMeetingTimeChange: false,
        isDaylightSavingsChange: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sundays', null, {});
  }
};
