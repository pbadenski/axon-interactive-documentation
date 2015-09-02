var disruptorCommandBusModel = {
 name: "disruptor command bus",
 title: "DisruptorCommandBus",
 data: [
   {
     aggregateId: "",
     sequence: "",
     invokerSegment: "",
     event: "",
   }
 ]
};
var ringBufferModel = {
 name: "ring buffer",
 data: [
   {
     sequence: 0,
     contents: "CommandHandlingEntry #1"
   },
   {
     sequence: 1,
     contents: "CommandHandlingEntry #2"
   },
   {
     sequence: 2,
     contents: "CommandHandlingEntry #3"
   },
   {
     sequence: 3,
     contents: "CommandHandlingEntry #4"
   },
 ]
};
var commandHandlerInvokerModel = {
 name: "command handler invoker",
 title: "CommandHandlerInvoker - separate threads",
 data: [
   {
     segmentId: 0,
     processing: ""
   },
   {
     segmentId: 1,
     processing: ""
   },
   {
     segmentId: 2,
     processing: ""
   },
   {
     segmentId: 3,
     processing: ""
   },
 ]
};

