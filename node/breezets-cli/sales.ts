/// <reference path="breezeextensions.ts" />namespace acme.sales{   import extensions = dk.schaumburgit.breezeextensions;   import typedefs = acme.sales.typedefs;   import querybuilder = acme.sales.querybuilder;   export class SalesServer   {      private _entityManager: breeze.EntityManager = null;      constructor(serverUrl: string);      constructor(breezeManager: breeze.EntityManager);      constructor(server: string | breeze.EntityManager = null)      {          if (server == null)          {              throw "Cannot use a null or empty URL when connecting to a SalesServer data service";          }          else if (typeof server === "string")          {              this._entityManager = new breeze.EntityManager(server as string);          }          else          {              this._entityManager = server as breeze.EntityManager;          }      }      public get Customers(): extensions.TEntityQuery<querybuilder.CustomerQuery, typedefs.Customer>      {          return new extensions.TEntityQuery<querybuilder.CustomerQuery, typedefs.Customer>(this._entityManager, "Customers", querybuilder.CustomerQuery._Instance, null, null);      }      public get Orders(): extensions.TEntityQuery<querybuilder.OrderQuery, typedefs.Order>      {          return new extensions.TEntityQuery<querybuilder.OrderQuery, typedefs.Order>(this._entityManager, "Orders", querybuilder.OrderQuery._Instance, null, null);      }      public get Deliveries(): extensions.TEntityQuery<querybuilder.DeliveryQuery, typedefs.Delivery>      {          return new extensions.TEntityQuery<querybuilder.DeliveryQuery, typedefs.Delivery>(this._entityManager, "Deliveries", querybuilder.DeliveryQuery._Instance, null, null);      }   }}namespace acme.sales.querybuilder{   import extensions = dk.schaumburgit.breezeextensions;   import typedefs = acme.sales.typedefs;   export class CustomerQuery   {      private static _instance: CustomerQuery = null;      static get _Instance(): CustomerQuery {          if (CustomerQuery._instance == null)              CustomerQuery._instance = new CustomerQuery();          return CustomerQuery._instance;      }      public Id: extensions.NumberFieldInfo<CustomerQuery, typedefs.Customer> = new extensions.NumberFieldInfo<CustomerQuery, typedefs.Customer>(CustomerQuery._instance, "Id");       public Name: extensions.StringFieldInfo<CustomerQuery, typedefs.Customer> = new extensions.StringFieldInfo<CustomerQuery, typedefs.Customer>(CustomerQuery._instance, "Name");       public Orders: extensions.MultiAssociationFieldInfo<CustomerQuery, typedefs.Customer, OrderQuery, typedefs.Order> = new extensions.MultiAssociationFieldInfo<CustomerQuery, typedefs.Customer, OrderQuery, typedefs.Order>(CustomerQuery._instance, "Orders");   }   export class OrderQuery   {      private static _instance: OrderQuery = null;      static get _Instance(): OrderQuery {          if (OrderQuery._instance == null)              OrderQuery._instance = new OrderQuery();          return OrderQuery._instance;      }      public Id: extensions.NumberFieldInfo<OrderQuery, typedefs.Order> = new extensions.NumberFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "Id");       public CustomerId: extensions.NumberFieldInfo<OrderQuery, typedefs.Order> = new extensions.NumberFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "CustomerId");       public OrderDate: extensions.DateFieldInfo<OrderQuery, typedefs.Order> = new extensions.DateFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "OrderDate");       public Amount: extensions.NumberFieldInfo<OrderQuery, typedefs.Order> = new extensions.NumberFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "Amount");       public DueDate: extensions.DateFieldInfo<OrderQuery, typedefs.Order> = new extensions.DateFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "DueDate");       public PaidDate: extensions.DateFieldInfo<OrderQuery, typedefs.Order> = new extensions.DateFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "PaidDate");       public Description: extensions.StringFieldInfo<OrderQuery, typedefs.Order> = new extensions.StringFieldInfo<OrderQuery, typedefs.Order>(OrderQuery._instance, "Description");       public Customer: extensions.SingleAssociationFieldInfo<OrderQuery, typedefs.Order, CustomerQuery, typedefs.Customer> = new extensions.SingleAssociationFieldInfo<OrderQuery, typedefs.Order, CustomerQuery, typedefs.Customer>(OrderQuery._instance, "Customer");      public Deliveries: extensions.MultiAssociationFieldInfo<OrderQuery, typedefs.Order, DeliveryQuery, typedefs.Delivery> = new extensions.MultiAssociationFieldInfo<OrderQuery, typedefs.Order, DeliveryQuery, typedefs.Delivery>(OrderQuery._instance, "Deliveries");   }   export class DeliveryQuery   {      private static _instance: DeliveryQuery = null;      static get _Instance(): DeliveryQuery {          if (DeliveryQuery._instance == null)              DeliveryQuery._instance = new DeliveryQuery();          return DeliveryQuery._instance;      }      public Id: extensions.NumberFieldInfo<DeliveryQuery, typedefs.Delivery> = new extensions.NumberFieldInfo<DeliveryQuery, typedefs.Delivery>(DeliveryQuery._instance, "Id");       public OrderId: extensions.NumberFieldInfo<DeliveryQuery, typedefs.Delivery> = new extensions.NumberFieldInfo<DeliveryQuery, typedefs.Delivery>(DeliveryQuery._instance, "OrderId");       public Description: extensions.StringFieldInfo<DeliveryQuery, typedefs.Delivery> = new extensions.StringFieldInfo<DeliveryQuery, typedefs.Delivery>(DeliveryQuery._instance, "Description");       public PlannedDate: extensions.DateFieldInfo<DeliveryQuery, typedefs.Delivery> = new extensions.DateFieldInfo<DeliveryQuery, typedefs.Delivery>(DeliveryQuery._instance, "PlannedDate");       public DeliveredDate: extensions.DateFieldInfo<DeliveryQuery, typedefs.Delivery> = new extensions.DateFieldInfo<DeliveryQuery, typedefs.Delivery>(DeliveryQuery._instance, "DeliveredDate");       public Order: extensions.SingleAssociationFieldInfo<DeliveryQuery, typedefs.Delivery, OrderQuery, typedefs.Order> = new extensions.SingleAssociationFieldInfo<DeliveryQuery, typedefs.Delivery, OrderQuery, typedefs.Order>(DeliveryQuery._instance, "Order");   }}