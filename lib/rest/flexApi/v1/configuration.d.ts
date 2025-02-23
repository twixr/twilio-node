/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type ConfigurationStatus = 'ok'|'inprogress'|'notstarted';

/**
 * Initialize the ConfigurationList
 *
 * @param version - Version of the resource
 */
declare function ConfigurationList(version: V1): ConfigurationListInstance;

/**
 * Options to pass to fetch
 *
 * @property uiVersion - The Pinned UI version of the Configuration resource to fetch
 */
interface ConfigurationInstanceFetchOptions {
  uiVersion?: string;
}

interface ConfigurationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConfigurationContext;
  /**
   * Constructs a configuration
   */
  get(): ConfigurationContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface ConfigurationPayload extends ConfigurationResource, Page.TwilioResponsePayload {
}

interface ConfigurationResource {
  account_sid: string;
  attributes: object;
  call_recording_enabled: boolean;
  call_recording_webhook_url: string;
  chat_service_instance_sid: string;
  crm_attributes: object;
  crm_callback_url: string;
  crm_enabled: boolean;
  crm_fallback_url: string;
  crm_type: string;
  date_created: Date;
  date_updated: Date;
  flex_insights_hr: object;
  flex_service_instance_sid: string;
  integrations: object[];
  markdown: object;
  messaging_service_instance_sid: string;
  notifications: object;
  outbound_call_flows: object;
  plugin_service_attributes: object;
  plugin_service_enabled: boolean;
  public_attributes: object;
  queue_stats_configuration: object;
  runtime_domain: string;
  serverless_service_sids: string[];
  service_version: string;
  status: ConfigurationStatus;
  taskrouter_offline_activity_sid: string;
  taskrouter_skills: object[];
  taskrouter_target_taskqueue_sid: string;
  taskrouter_target_workflow_sid: string;
  taskrouter_taskqueues: object[];
  taskrouter_worker_attributes: object;
  taskrouter_worker_channels: object;
  taskrouter_workspace_sid: string;
  ui_attributes: object;
  ui_dependencies: object;
  ui_language: string;
  ui_version: string;
  url: string;
}

interface ConfigurationSolution {
}


declare class ConfigurationContext {
  /**
   * Initialize the ConfigurationContext
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * create a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * fetch a ConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: ConfigurationInstanceFetchOptions, callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
}


declare class ConfigurationInstance extends SerializableClass {
  /**
   * Initialize the ConfigurationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: ConfigurationPayload);

  private _proxy: ConfigurationContext;
  accountSid: string;
  attributes: any;
  callRecordingEnabled: boolean;
  callRecordingWebhookUrl: string;
  chatServiceInstanceSid: string;
  /**
   * create a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  crmAttributes: any;
  crmCallbackUrl: string;
  crmEnabled: boolean;
  crmFallbackUrl: string;
  crmType: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * fetch a ConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: ConfigurationInstanceFetchOptions, callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  flexInsightsHr: any;
  flexServiceInstanceSid: string;
  integrations: object[];
  markdown: any;
  messagingServiceInstanceSid: string;
  notifications: any;
  outboundCallFlows: any;
  pluginServiceAttributes: any;
  pluginServiceEnabled: boolean;
  publicAttributes: any;
  queueStatsConfiguration: any;
  runtimeDomain: string;
  serverlessServiceSids: string[];
  serviceVersion: string;
  status: ConfigurationStatus;
  taskrouterOfflineActivitySid: string;
  taskrouterSkills: object[];
  taskrouterTargetTaskqueueSid: string;
  taskrouterTargetWorkflowSid: string;
  taskrouterTaskqueues: object[];
  taskrouterWorkerAttributes: any;
  taskrouterWorkerChannels: any;
  taskrouterWorkspaceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uiAttributes: any;
  uiDependencies: any;
  uiLanguage: string;
  uiVersion: string;
  /**
   * update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  url: string;
}


declare class ConfigurationPage extends Page<V1, ConfigurationPayload, ConfigurationResource, ConfigurationInstance> {
  /**
   * Initialize the ConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConfigurationSolution);

  /**
   * Build an instance of ConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConfigurationPayload): ConfigurationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ConfigurationContext, ConfigurationInstance, ConfigurationInstanceFetchOptions, ConfigurationList, ConfigurationListInstance, ConfigurationPage, ConfigurationPayload, ConfigurationResource, ConfigurationSolution, ConfigurationStatus }
